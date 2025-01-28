function calculatePrice() {
    const area = document.getElementById('area').value;
    const service = document.getElementById('service').value;

    let pricePerMeter;

    if (service === 'cleaning') {
        pricePerMeter = 50;
    } else if (service === 'dry_cleaning') {
        pricePerMeter = 100;
    } else if (service === 'post_renovation') {
        pricePerMeter = 150;
    }

    if (area && pricePerMeter) {
        const total = area * pricePerMeter;
        document.getElementById('result').textContent = `Примерная стоимость: ${total} руб.`;
    } else {
        document.getElementById('result').textContent = 'Пожалуйста, введите данные.';
    }
}