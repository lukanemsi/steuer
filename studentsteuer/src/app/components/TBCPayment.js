import { useEffect } from "react";

const TbcPaymentButton = () => {
  useEffect(() => {
    window.TbcCallBack = function () {
  if (window.TbcCheckout) {
    const btnContainer = document.getElementById('tbcCheckoutButton');
    if (btnContainer) {
      btnContainer.innerHTML = ""; 
    }

    window.TbcCheckout.Render({ type: 'large', color: 'blue' });

    const btn = document.getElementById('tbcCheckoutButton');
    if (btn) {
      btn.addEventListener('click', redirectTbcCheckout);
    }
  }
    };

    window.redirectTbcCheckout = async function () {
      try {
        const res = await fetch("https://your-backend.com/api/initiate-tbc-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ amount: 100.0, currency: "GEL", description: "Order #1234" })
        });

        const data = await res.json();
        window.location.href = data.redirectUrl;
      } catch (err) {
        console.error("Payment init failed:", err);
        alert("Payment could not be started.");
      }
    };

    const existingScript = document.getElementById("tbcCheckoutSdk");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "tbcCheckoutSdk";
      script.src = "https://ecom.tbcpayments.ge/tbccheckoutbutton/script.min.js?callback=TbcCallBack";
      script.type = "text/javascript";
      script.defer = true;
      document.body.appendChild(script);
    } else {
      if (typeof window.TbcCallBack === "function") {
        window.TbcCallBack();
      }
    }
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: '<tbccheckout id="tbcCheckoutButton"></tbccheckout>',
      }}
    />
  );
};

export default TbcPaymentButton;
