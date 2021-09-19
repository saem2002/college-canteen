import axios from 'axios';




const url = 'http://localhost:8000';


export const addUser = async (data) => {
    try {
        let response = await axios.post(`${url}/add`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling addUser API ', error);
    }
}


export const getUsers = async () => {
    try {
        let response = await axios.get(`${url}/users`);
        return response.data
    } catch (error) {
        console.log('Error while calling getUsers API ', error);
    }
}



export const getItems = async () => {
    try {
        let response = await axios.get(`${url}/items`);
        return response.data
    } catch (error) {
        console.log('Error while calling getUsers API ', error);
    }
}


export const payNow = async (totalPrice,handleclearcart) => {
    let res = await axios.get(`${url}/order/${totalPrice}`);
   console.log(res)
    
    const options = {
            "key": "rzp_test_78m6lTk80ZO6Mw", // Enter the Key ID generated from the Dashboard
            "amount": totalPrice, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "college Canteen",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": res.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": function (response){
                window.alert("successfully")
                handleclearcart()

                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature)
            },
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9999999999"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
        rzp1.on('payment.failed', function (response){
                // alert(response.error.code);
                // alert(response.error.description);
                // alert(response.error.source);
                // alert(response.error.step);
                // alert(response.error.reason);
                // alert(response.error.metadata.order_id);
                // alert(response.error.metadata.payment_id);
                
        });

}