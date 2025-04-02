import { FaCheckCircle } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

export default function ThankYou() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6 pt-20">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          {id ? "Thank You for Applying!" : "Thank You for Contacting Us!" }
        </h2>
        <p className="text-gray-600 mb-4">
         {id ? "Your application has been successfully submitted. Our team will review your details and get back to you soon." : "We will be thrilled to help you. One of our representative will get back to you soon." } 
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
