function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React$1 = require('react');
var React$1__default = _interopDefault(React$1);

function DangerLabel(props) {
  if (!props.message) {
    return null;
  }

  return /*#__PURE__*/React$1__default.createElement("div", {
    className: "alert alert-danger",
    role: "alert"
  }, props.message);
}

function ErrorLabel(props) {
  if (!props.message) {
    return null;
  }

  return /*#__PURE__*/React$1__default.createElement("div", {
    className: "invalid-feedback"
  }, props.message);
}

function Form(props) {
  return /*#__PURE__*/React$1__default.createElement("form", {
    onSubmit: function onSubmit(e) {
      return e.preventDefault();
    }
  }, props.children);
}

function FormAcceptButton(props) {
  return /*#__PURE__*/React$1__default.createElement("button", {
    className: "btn btn-primary",
    onClick: props.onClick
  }, props.label);
}

function FormButton(props) {
  return /*#__PURE__*/React$1__default.createElement("button", {
    className: "btn btn-light",
    onClick: props.onClick
  }, props.label);
}

function FormButtonBar(props) {
  return /*#__PURE__*/React$1__default.createElement("div", {
    className: "btn-group "
  }, props.children);
}

function FormInput(props) {
  return /*#__PURE__*/React$1__default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React$1__default.createElement("label", null, props.label), /*#__PURE__*/React$1__default.createElement("input", {
    id: props.name,
    type: "text",
    value: props.value,
    onChange: props.onChange,
    className: props.errorHandler.getErrorClass(props.name, "form-control")
  }), /*#__PURE__*/React$1__default.createElement(ErrorLabel, {
    message: props.errorHandler.getErrorText(props.name)
  }));
}

function FormLabel(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "params.label"), /*#__PURE__*/React.createElement("input", {
    className: "form-control",
    id: "login",
    value: props.text,
    disabled: true
  }));
}

function FormPassword(props) {
  return /*#__PURE__*/React$1__default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React$1__default.createElement("label", null, props.label), /*#__PURE__*/React$1__default.createElement("input", {
    id: props.name,
    type: "password",
    value: props.value,
    onChange: props.onChange,
    className: props.errorHandler.getErrorClass(props.name, "form-control")
  }), /*#__PURE__*/React$1__default.createElement(ErrorLabel, {
    message: props.errorHandler.getErrorText(props.name)
  }));
}

function FormTitle(props) {
  return /*#__PURE__*/React$1__default.createElement("h2", {
    className: "global_title"
  }, props.children);
}

function FormWarnButton(props) {
  return /*#__PURE__*/React$1__default.createElement("button", {
    hidden: props.hidden,
    className: "btn btn-warning",
    onClick: props.onClick
  }, props.label);
}

function GlobalContent(props) {
  return /*#__PURE__*/React$1__default.createElement("div", {
    className: "global_content"
  }, props.children);
}

function ImageUpload(props) {
  var fileInput = React$1.useRef(null);

  var imageClick = function imageClick() {
    var _fileInput$current;

    (_fileInput$current = fileInput.current) === null || _fileInput$current === void 0 ? void 0 : _fileInput$current.click();
  };

  var imageSelect = function imageSelect() {
    var _fileInput$current2;

    var files = (_fileInput$current2 = fileInput.current) === null || _fileInput$current2 === void 0 ? void 0 : _fileInput$current2.files;

    if (files == null) {
      return;
    }

    getBase64(files[0], function (image) {
      if (image && props.onChange) {
        props.onChange(image);
      }
    });
  };

  return /*#__PURE__*/React$1__default.createElement("div", null, /*#__PURE__*/React$1__default.createElement("img", {
    src: props.src,
    alt: "",
    height: "100",
    onClick: imageClick
  }), /*#__PURE__*/React$1__default.createElement("input", {
    type: "file",
    ref: fileInput,
    className: "upload",
    accept: "*",
    onChange: imageSelect,
    style: {
      display: "none"
    }
  }));
}

function getBase64(file, cb) {
  var reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = function () {
    cb(reader.result);
  };
}

exports.DangerLabel = DangerLabel;
exports.ErrorLabel = ErrorLabel;
exports.Form = Form;
exports.FormAcceptButton = FormAcceptButton;
exports.FormButton = FormButton;
exports.FormButtonBar = FormButtonBar;
exports.FormInput = FormInput;
exports.FormLabel = FormLabel;
exports.FormPassword = FormPassword;
exports.FormTitle = FormTitle;
exports.FormWarnButton = FormWarnButton;
exports.GlobalContent = GlobalContent;
exports.ImageUpload = ImageUpload;
//# sourceMappingURL=index.js.map
