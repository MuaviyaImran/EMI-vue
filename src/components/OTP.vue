<script setup>
import { ref, reactive, getCurrentInstance, onUpdated } from "vue";
const instance = getCurrentInstance();
const otpCont = ref(null);
const emit = defineEmits(["update:otp"]);
const handlePaste = (event, index) => {
  event.preventDefault();
  const clipboardData = event.clipboardData;

  const pastedText = clipboardData.getData("text").replace(/\D/g, "");
  if (isNaN(pastedText)) {
    input.value = "";
    return;
  }
  if (pastedText) {
    let currentIndex = index;
    for (
      let i = 0;
      i < pastedText.length && currentIndex < digits.length;
      i++
    ) {
      digits[currentIndex] = pastedText[i];
      currentIndex++;
    }
  }
};
const props = defineProps({
  default: String,
  otpError: String,
  otpVerifyConfirmation: String,
  digitCount: {
    type: Number,
    required: true,
  },
});

let currentIndex = 0;
const digits = reactive([]);
if (props.default && props.default.length === props.digitCount) {
  for (let i = 0; i < props.digitCount; i++) {
    digits[i] = props.default.charAt(i);
  }
} else {
  for (let i = 0; i < props.digitCount; i++) {
    digits[i] = null;
  }
}

const isDigitsFull = function () {
  for (const elem of digits) {
    if (elem == null || elem == undefined) {
      return false;
    }
  }

  return true;
};

function getTargetElement(idx) {
  return instance.refs["otpInputs"].find((el) => el.dataset["idx"] == idx);
}

function focusCurrentElement() {
  if (currentIndex === props.digitCount) {
    getTargetElement(currentIndex - 1).focus();
  } else {
    getTargetElement(currentIndex).focus();
  }
}

const handleFocus = function (event, index) {
  event.preventDefault();

  if (index !== currentIndex) {
    focusCurrentElement();
  }
};

const isDigit = function (val) {
  return new RegExp("^([0-9])$").test(val);
};

const handleKeyDown = function (event) {
  event.preventDefault();

  if (event.key === "Backspace") {
    if (currentIndex === 0) {
      return;
    }

    currentIndex--;

    digits[currentIndex] = null;
  } else if (isDigit(event.key)) {
    if (currentIndex === props.digitCount) {
      return;
    }

    digits[currentIndex] = event.key;

    currentIndex++;
  }
};

onUpdated(() => {
  focusCurrentElement();
});

const emitCode = () => {
  if (isDigitsFull()) {
    const code = digits.join("");
    emit("update:otp", code);
  }
};
</script>

<template>
  <div
    ref="otpCont"
    class="input-main rounded border"
    :class="{
      'border-secondary-light': !props.otpError,
      'border-danger': props.otpError,
    }"
  >
    <div
      v-for="(el, ind) in digits"
      :key="el + ind"
      class="relative flex items-center justify-center border-r"
      :class="{
        'border-secondary-light': !props.otpError,
        'border-danger': props.otpError,
      }"
    >
      <input
        type="text"
        class="digit-box px-4"
        :ref="`otpInputs`"
        v-model="digits[ind]"
        :data-idx="ind"
        maxlength="1"
        @keydown="handleKeyDown($event)"
        @focusin="handleFocus($event, ind)"
      />
    </div>
  </div>
  
</template>

<style scoped>
.input-main {
  display: flex;
}

.digit-box {
  color: black;
  height: 4rem;
  text-align: center;
  width: 70%;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #e5e7eb;
  font-size: 20px;
}
.digit-box:focus {
  border-bottom: 1px solid #ffcf25;
  outline: none;
}
</style>
