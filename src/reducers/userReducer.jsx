const INITIAL_STATE = {
  user: {},
  loanValue:null,
  showInstallments: false,
  installmentsMonths: null,
  installmentTotalValue: null,
  installmentMonthValue: 0,
  isHired: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DEFAULT':
      return {
        ...state, user: { ...action.payload },
      };
      case 'LOAN_VALUE':
        return {
          ...state, loanValue: action.payload , showInstallments: true,
        };
        case 'BACK_TO_LOAN':
          return {
            ...state, loanValue: null , showInstallments: false,
          };
          case 'INSTALLMENTS_VALUE':
            return {
              ...state, installmentsMonths: action.payload1, installmentTotalValue: action.payload2, installmentMonthValue: action.payload3,
            };
            case 'WILL_BE_HIRED':
              return {
                ...state, isHired: action.payload,
              };
    default:
      return state;
  }
};

export default userReducer;
