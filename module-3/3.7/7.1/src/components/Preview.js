const Preview = ({formProps}) => {
// mover la funcion renderPaymentTypeText aqui 
// app pasa como prop paymentType del mismo modo que name, email..
// llamar a la funcion renderPaymentTypeText en la 14
const renderPaymentTypeText = () => {
  if (formProps.paymentType === "creditCard") {
    return "Tarjeta de crédito";
  } else if (formProps.paymentType === "cash") {
    return "Efectivo";
  } else if (formProps.paymentType === "cashOnDelivery") {
    return "Contra reenbolso";
  }
};
  return (<div className="preview">
    <h2>Tus datos son:</h2>
    <ul>
      <li>Nombre: {formProps.name}</li>
      <li>Email: {formProps.email}</li>
      <li>Región: {formProps.region}</li>
      <li>Método de pago: {renderPaymentTypeText()}</li>
      <li>
        Has aceptado nuestros términos legales:{" "}
        {formProps.legalTerms === true ? "Sí" : "No"}
      </li>
    </ul>
  </div>)
}

export default Preview;