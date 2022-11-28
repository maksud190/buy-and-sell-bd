import { useEffect, useState } from "react";

const useBuyer = email => {

    const [isUser, setIsUser] = useState(false);

    useEffect(() => {
        if (email) {

            fetch(`https://buy-and-sell-bd-server.vercel.app/users/user/${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {

                    setIsUser(data.isUser);

                })
        }
    }, [email])
    return [isUser];
}

export default useBuyer;