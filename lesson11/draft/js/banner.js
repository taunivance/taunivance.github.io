const today = new Date();
                console.log(today);

                const dayNumber = today.getDay();
                console.log(dayNumber);


                const element = document.getElementById("message");
                if (dayNumber == 6) {
                    element.classList.add ("showme");
                    } else {
                    element.classList.add ("hideme");
                }