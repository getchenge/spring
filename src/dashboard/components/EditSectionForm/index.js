import React, { Component } from 'react';
import { Form, Select, Icon, Input, Button, Row, Col, Cascader, InputNumber } from 'antd';
import styles from './styles.scss';
import { connect } from 'dva';
import { message } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

class editSectionForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    const { dispatch } = this.props;
    const values = this.props.form.getFieldsValue();
    let { section, index } = this.props;
    section.value = Object.assign([], section.value);
    section.value[index || 0] = values;

    dispatch({
      type: 'sections/patch',
      payload: { section },
    }).then(() => {
      message.success('创建成功', 2);
    });
  }

  render() {
    const { section, index } = this.props;
    const { getFieldDecorator } = this.props.form;
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
    const submitLayout = {
      wrapperCol: { span: 14, offset: 6 },
    };
    const fields = section && section.fields;
    let item;
    if (index >= 0 && section && section.value) {
      item = section.value[index];
    }
    //todo switch field type
    const fieldItems = fields && fields.map((field, idx) => {
      let tag;
      switch (field.type) {
        case 'String':
          tag = getFieldDecorator(`${field.name}`, {
            rules: [{ required: true, message: `请输入${field.caption}` }],
            initialValue: item && item[field.name] || ''
          })(<Input name={field.name} />);
          break;
        case 'Paragraph':
          tag = getFieldDecorator(`${field.name}`, {
            rules: [{ message: `请输入${field.caption}` }],
            initialValue: item && item[field.name] || ''
          })(<TextArea autosize name={field.name} />);
      }
      return (
        <FormItem
          {...formItemLayout}
          label={field.caption}
          key={idx}
        >
          {tag}
        </FormItem>
      );
    });

    return (
      <Form onSubmit={this.handleSubmit}>
        {fieldItems}
        <FormItem {...submitLayout}>
          <Button className={styles.submit} type="primary" htmlType="submit">保存</Button>
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

export default connect(mapStateToProps)(editSectionForm);
