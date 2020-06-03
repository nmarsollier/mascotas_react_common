import React$1, { useRef, useState } from 'react';

function DangerLabel(props) {
  if (!props.message) {
    return null;
  }

  return /*#__PURE__*/React$1.createElement("div", {
    className: "alert alert-danger",
    role: "alert"
  }, props.message);
}

function ErrorLabel(props) {
  if (!props.message) {
    return null;
  }

  return /*#__PURE__*/React$1.createElement("div", {
    className: "invalid-feedback"
  }, props.message);
}

function Form(props) {
  return /*#__PURE__*/React$1.createElement("form", {
    onSubmit: function onSubmit(e) {
      return e.preventDefault();
    }
  }, props.children);
}

function FormAcceptButton(props) {
  return /*#__PURE__*/React$1.createElement("button", {
    className: "btn btn-primary",
    onClick: props.onClick
  }, props.label);
}

function FormButton(props) {
  return /*#__PURE__*/React$1.createElement("button", {
    className: "btn btn-light",
    onClick: props.onClick
  }, props.label);
}

function FormButtonBar(props) {
  return /*#__PURE__*/React$1.createElement("div", {
    className: "btn-group "
  }, props.children);
}

function FormInput(props) {
  return /*#__PURE__*/React$1.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React$1.createElement("label", null, props.label), /*#__PURE__*/React$1.createElement("input", {
    id: props.name,
    type: "text",
    value: props.value,
    onChange: props.onChange,
    className: props.errorHandler.getErrorClass(props.name, "form-control")
  }), /*#__PURE__*/React$1.createElement(ErrorLabel, {
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
  return /*#__PURE__*/React$1.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React$1.createElement("label", null, props.label), /*#__PURE__*/React$1.createElement("input", {
    id: props.name,
    type: "password",
    value: props.value,
    onChange: props.onChange,
    className: props.errorHandler.getErrorClass(props.name, "form-control")
  }), /*#__PURE__*/React$1.createElement(ErrorLabel, {
    message: props.errorHandler.getErrorText(props.name)
  }));
}

function FormTitle(props) {
  return /*#__PURE__*/React$1.createElement("h2", {
    className: "global_title"
  }, props.children);
}

function FormWarnButton(props) {
  return /*#__PURE__*/React$1.createElement("button", {
    hidden: props.hidden,
    className: "btn btn-warning",
    onClick: props.onClick
  }, props.label);
}

function GlobalContent(props) {
  return /*#__PURE__*/React$1.createElement("div", {
    className: "global_content"
  }, props.children);
}

function ImageUpload(props) {
  var fileInput = useRef(null);

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

  return /*#__PURE__*/React$1.createElement("div", null, /*#__PURE__*/React$1.createElement("img", {
    src: props.src,
    alt: "",
    height: "100",
    onClick: imageClick
  }), /*#__PURE__*/React$1.createElement("input", {
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

var environment = {
  backendUrl: process.env.BACKEND_URL || "http://localhost:3000"
};

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

function useForceUpdate() {
  var setForceUpdate = useState(0)[1];
  return function () {
    setForceUpdate(Date.now);
  };
}

var ErrorHandler = /*#__PURE__*/function () {
  function ErrorHandler(forceUpdate) {
    this.errorMessage = undefined;
    this.errors = new Map();
    this.forceUpdate = forceUpdate;
  }

  var _proto = ErrorHandler.prototype;

  _proto.processRestValidations = function processRestValidations(data) {
    if (this.errors && this.errors.size > 0) {
      this.cleanRestValidations();
      this.forceUpdate();
    }

    if (!data.response || !data.response.data) {
      this.errorMessage = "Problemas de conexión, verifique conexión a internet.";
      this.forceUpdate();
      return;
    }

    if (data.response.data.messages) {
      for (var _iterator = _createForOfIteratorHelperLoose(data.response.data.messages), _step; !(_step = _iterator()).done;) {
        var error = _step.value;
        this.errors.set(error.path, error.message);
      }
    } else if (typeof data.response.data.error === "string") {
      this.errorMessage = data.response.data.error;
    } else {
      this.errorMessage = "Problemas internos del servidor";
    }

    this.forceUpdate();
  };

  _proto.addError = function addError(component, message) {
    this.errors.set(component, message);
    this.forceUpdate();
  };

  _proto.cleanRestValidations = function cleanRestValidations() {
    this.errorMessage = undefined;
    this.errors.clear();
    this.forceUpdate();
  };

  _proto.getErrorText = function getErrorText(item) {
    return this.errors.get(item);
  };

  _proto.getErrorClass = function getErrorClass(component, baseClass) {
    return baseClass + (this.getErrorText(component) ? " is-invalid" : "");
  };

  _proto.hasErrors = function hasErrors() {
    return this.errors.size > 0 && !this.errorMessage;
  };

  return ErrorHandler;
}();

function useErrorHandler() {
  var forceUpdate = useForceUpdate();
  var handler = useState(new ErrorHandler(forceUpdate))[0];
  return handler;
}

export { DangerLabel, ErrorHandler, ErrorLabel, Form, FormAcceptButton, FormButton, FormButtonBar, FormInput, FormLabel, FormPassword, FormTitle, FormWarnButton, GlobalContent, ImageUpload, environment, useErrorHandler };
//# sourceMappingURL=index.modern.js.map
