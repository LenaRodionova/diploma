import {searchFormButton, searchInput, validationError} from "../../elements";

export default class InputBlock {

  showValidationError() {
    validationError.textContent = "Нужно ввести ключевое слово";
    validationError.classList.remove("search-form__validation-error_invisible");
    searchFormButton.disabled = true;
  }

  hideValidationError() {
    validationError.classList.add("search-form__validation-error_invisible");
    searchFormButton.disabled = false;
  }

  disableInput() {
    searchInput.setAttribute("disabled", "disabled")
  }

  enableInput() {
    searchInput.removeAttribute("disabled")
  }

}