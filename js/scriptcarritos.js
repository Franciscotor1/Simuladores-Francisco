document.addEventListener('DOMContentLoaded', () => {
    const car1 = document.getElementById('car1');
    const car2 = document.getElementById('car2');
    const startButton = document.getElementById('startButton');
    const chooseBlueButton = document.getElementById('chooseBlueButton');
    const chooseRedButton = document.getElementById('chooseRedButton');
    const backButton = document.getElementById('backButton');
    const track = document.querySelector('.track');
    let selectedCar = null;

    function getRandomSpeed() {
        return Math.random() * 5 + 2; // Velocidad aleatoria entre 2 y 7
    }

    function moveCar(car, duration) {
        const distance = track.offsetWidth - car.offsetWidth;
        car.style.transition = `transform ${duration}s linear`;
        car.style.transform = `translateX(${distance}px)`;

        setTimeout(() => {
            if (car.style.transform === `translateX(${distance}px)`) {
                const winner = car === car1 ? 'Car 1 (Azul)' : 'Car 2 (Rojo)';
                const message = selectedCar === car ? '¡Ganaste!' : '¡Perdiste!';
                alert(`¡${winner} ha ganado la carrera! ${message}`);
                resetCars();
            }
        }, duration * 1000);
    }

    startButton.addEventListener('click', () => {
        if (selectedCar) {
            resetCars();
            const duration1 = getRandomSpeed();
            const duration2 = getRandomSpeed();

            moveCar(car1, duration1);
            moveCar(car2, duration2);
        } else {
            alert('Por favor elige un carrito primero.');
        }
    });

    chooseBlueButton.addEventListener('click', () => {
        selectedCar = car1;
        alert('Has elegido el carrito azul.');
    });

    chooseRedButton.addEventListener('click', () => {
        selectedCar = car2;
        alert('Has elegido el carrito rojo.');
    });

    backButton.addEventListener('click', () => {
        window.location.href = '/index.html'; // Adjusted to point to root index.html
    });

    function resetCars() {
        car1.style.transition = 'none';
        car1.style.transform = 'translateX(0)';
        car2.style.transition = 'none';
        car2.style.transform = 'translateX(0)';
    }
});
