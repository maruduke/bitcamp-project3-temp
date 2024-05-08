document.addEventListener('DOMContentLoaded', () => {
    const jwt = sessionStorage.getItem('jwt');
    fetch('http://localhost:8080/login/mypage',{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'authorization': `Bearer ${jwt}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // function formatPhoneNumber(phoneNumber) {
        //     const regex = /(\d{3})(\d{4})(\d{4})/;
        //     const formatted = phoneNumber.replace(regex, '$1-$2-$3');
        //     return formatted;
        // }

        document.getElementById('userName').textContent = data.name;
        document.getElementById('userPosition').textContent = data.position;
        document.getElementById('userDept').textContent += data.dept;
        document.getElementById('userId').textContent = data.userId;

        //이메일 변경
        document.getElementById('userEmail').value = data.email;
        // document.getElementById('userPhone').value = data.tel;

        // 수정 버튼 클릭 시 서버에 변경된 정보 전송
        document.getElementById('saveChanges').addEventListener('click', () => {
            const updatedEmail = document.getElementById('userEmail').value;
            const updatedPhone = document.getElementById('userPhone').value;

            // 서버에 변경된 정보 전송
            fetch('http://localhost:8080/login/mypage/modify', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${jwt}`
                },
                body: JSON.stringify({ email: updatedEmail, tel: updatedPhone })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                console.log('Changes saved successfully!');
            })
            .catch(error => {
                console.error('Save Changes Error:', error);
            });
        });
    })
    .catch(error => {
        console.error('Fetch Error:', error);
    });
});