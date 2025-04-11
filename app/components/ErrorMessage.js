// components/ErrorMessage.js
const ErrorMessage = ({ message }) => {
    return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded" role="alert">
        <p className="font-bold">Hata</p>
        <p>{message}</p>
      </div>
    );
  };
  
  export default ErrorMessage;