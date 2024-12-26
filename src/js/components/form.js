import { validateForms } from '../functions/validate-forms.js'

const urlParams = new URLSearchParams(window.location.search)
const sourceParam = urlParams.get('source_address') // Получаем значение параметра из URL
const hiddenInputs = document.querySelectorAll('input[name="source_address"]')

hiddenInputs?.forEach((input => {
	if (sourceParam === 'second-address') {
		input.value = 'Хлебный переулок'
	} else {
		input.value = 'На Красных Воротах'
	}
}))

const rules = [
  {
		ruleSelector: 'input[name="name"]',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Минимальная длина 3 символа',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Обязательное поле',
      },
    ]
  },
  {
    ruleSelector: 'input[type="tel"]',
    tel: true,
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Обязательное поле',
      }
    ]
  },
  {
    ruleSelector: 'input[name="policy"]',
    rules: [
      {
        rule: 'required',
				errorMessage: 'Вы должны согласиться с условиями',
      }
    ]
  },
]

const afterForm = () => {
  console.log('Success')
}

validateForms('.js-form-validate', rules, afterForm)