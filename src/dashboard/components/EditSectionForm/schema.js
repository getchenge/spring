import React, { Component } from 'react';
import { Form, Select, Icon, Input, Button, Row, Col, Cascader, InputNumber } from 'antd';
import styles from '../NewSectionForm/style.scss';
import { connect } from 'dva';
import { message, Modal } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

let uuid = 0;

class EditSectionSchema extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  componentDidMount() {
    // this.props.form.validateFields(); //validate at begining
  }
  remove = (k) => {
    const { form } = this.props;
    const keys = form.getFieldValue('fields');
    if (keys.length === 1) {
      return;
    }

    form.setFieldsValue({
      fields: keys.filter(key => key !== k)
    });
  }

  add = () => {
    uuid++;
    const { form } = this.props;
    const keys = form.getFieldValue('fields');
    const nextKeys = keys.concat(uuid);
    form.setFieldsValue({
      fields: nextKeys
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    const { dispatch, section } = this.props;
    const values = this.props.form.getFieldsValue();
    let type = 'sections/create';
    let msg = '创建成功';
    if (section) {
      type = 'sections/patch';
      msg = '保存成功';
    }
    const { caption, name, isList, fields } = values;
    const new_section = Object.assign(section, { caption, name, isList, fields: [] });
    fields.length > 0 && fields.map((i) => {
      const field = {
        caption: values[`caption-${i}`],
        name: values[`name-${i}`],
        type: values[`type-${i}`],
        placeholder: values[`placeholder-${i}`],
        value: ''
      };
      Object.assign(field, section.fields[i], field);
      new_section.fields.push(field);
    });
    dispatch({
      type,
      payload: { section: new_section },
    }).then(() => {
      message.success(msg);
      this.props.history.push(`/dashboard/`);
    });
  }
  handleCancel = (e) => {
    this.setState({
      visible: false
    });
  }
  showModal = (e) => {
    this.setState({
      visible: true
    });
  }
  removeSection = (e) => {
    const { section, dispatch } = this.props;
    dispatch({
      type: 'sections/remove',
      payload: { id: section._id },
    }).then(() => {
      message.success('删除成功');
      this.props.history.push(`/dashboard/`);
    });
  }

  render() {
    const { section, index } = this.props;
    if (!section) {
      return (<div>loading</div>);
    }
    console.info('schema_section__', section);
    const fieldList = section && section.fields;
    const { getFieldDecorator, getFieldValue, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };
    const submitLayout = {
      wrapperCol: { span: 14, offset: 6 },
    };
    const initial_fields = fieldList.map((v, idx) => {
      return idx;
    });
    uuid = fieldList.length || 0;
    console.info('initial_fields~~', initial_fields);
    getFieldDecorator('fields', { initialValue: initial_fields || [0] });
    const fields = getFieldValue('fields');
    const fieldsItem = fields.map((field, index) => {
      const item = fieldList && fieldList[index] || {};
      return (
        <div className={styles.card} key={field}>
          <FormItem
            {...formItemLayout}
            label="属性名称"
            hasFeedback
          >
            {getFieldDecorator(`caption-${field}`, {
              initialValue: item.caption || '',
              rules: [{ required: true, message: '请输入属性名称' }]
            })(<Input />)}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="属性key"
            hasFeedback
          >
            {getFieldDecorator(`name-${field}`, {
              initialValue: item.name || '',
              rules: [{ required: true, message: '属性key' }]
            })(<Input placeholder="英文" />)}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="属性placeholder"
            hasFeedback
          >
            {getFieldDecorator(`placeholder-${field}`, {
              initialValue: item.placeholder || '',
              rules: [{ message: '请输入属性名称' }]
            })(<Input />)}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="属性类型"
          >
            {getFieldDecorator(`type-${index}`, { initialValue: item.type || 'String' })(
              <Select>
                <Option value="String">字符串</Option>
                <Option value="Select">选项</Option>
                <Option value="Object">对象</Option>
                <Option value="Paragraph">段落</Option>
              </Select>
            )}
          </FormItem>
          {fields.length > 1 ? (
            <Icon
              className={styles['dynamic-delete-button']}
              type="minus-circle-o"
              disabled={fields.length === 1}
              onClick={() => this.remove(index)}
            />
          ) : null}
        </div>
      );
    });
    let removeBtn, removeModal;
    if (section) {
      removeBtn = (
        <Button className={styles.submit} type="danger" onClick={this.showModal}>删除</Button>
      );
      removeModal = (
        <Modal
          title="删除确认"
          cancelText="取消"
          okText="确定"
          okType="danger"
          visible={this.state.visible}
          onOk={this.removeSection}
          onCancel={this.handleCancel}
        >
          <p>确定删除该模块吗？</p>
        </Modal>
      );
    }
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="模块名称"
          hasFeedback
        >
          {getFieldDecorator('caption', {
            initialValue: section.caption || '',
            rules: [{ required: true, message: '请输入模块名称' }]
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="模块key"
          hasFeedback
        >
          {getFieldDecorator('name', {
            initialValue: section.name || '',
            rules: [{ required: true, message: '请输入模块key' }, { pattern: /[a-zA-Z]/, message: '请输入英文' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="location"
          hasFeedback
        >
          {getFieldDecorator('location')(<Input placeholder="路由" />)}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="是否是列表"
        >
          {getFieldDecorator('isList', {
            initialValue: section.isList ? 'yes' : 'no'
          })(
            <Select>
              <Option value="no">否</Option>
              <Option value="yes">是</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="属性"></FormItem>
        <Row>
          <Col className={styles.group} sm={15} xs={24} offset={5}>
            {fieldsItem}
            <FormItem {...formItemLayoutWithOutLabel}>
              <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
                <Icon type="plus" /> 添加新属性
            </Button>
            </FormItem>
          </Col>
        </Row>
        <FormItem {...submitLayout}>
          <Button className={styles.submit} type="primary" htmlType="submit">{section ? '保存' : '添加'}</Button>
          {removeBtn}
          {removeModal}
        </FormItem>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  const { list, total, page } = state.sections;
  return {
    loading: state.loading.models.sections,
    list,
    total,
    page,
  };
}

// export default NewSectionForm;
export default connect(mapStateToProps)(EditSectionSchema);
