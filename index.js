var length = ['Meter', 'Kilometer', 'Centimeter', 'Millimeter', 'Micrometer', 'Nanometer', 'Mile', 'Yard', 'Foot', 'Inch', 'Light Year'];
var temperature = ['Celsius', 'Fahrenheit', 'Kelvin'];
var area = ['Square Meter', 'Square Kilometer', 'Square Centimeter', 'Square Millimeter', 'Square Micrometer', 'Square Mile', 'Square Yard', 'Square Foot', 'Square Inch', 'Hectare', 'Acre'];
var volume = ['Cubic Meter', 'Cubic Kilometer', 'Cubic Centimeter', 'Liter', 'Milliliter'];
var weight = ['Kilogram', 'Gram', 'Milligram', 'Ton', 'Pound', 'Ounce'];
var time = ['Second', 'Minute', 'Hour', 'Day', 'Week', 'Month', 'Year'];
var fromSelect = document.getElementById('from-input');
var toSelect = document.getElementById('to-input');
iteratorArrayOfObjects(length)
fromSelect.addEventListener('change', updateDisabledOptions);
toSelect.addEventListener('change', updateDisabledOptions);

document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {

            document.querySelector('.nav-link.active').classList.remove('active')
            link.classList.add('active')
            let type = link.getAttribute('data-type')

            if (type === 'length') {

                document.getElementById('converter-title').innerHTML = `<i class="fa-solid fa-ruler-vertical"></i> Length Converter`;
                iteratorArrayOfObjects(length)
                fromSelect.addEventListener('change', updateDisabledOptions);
                toSelect.addEventListener('change', updateDisabledOptions);

            } else if (type === 'temperature') {

                document.getElementById('converter-title').innerHTML = `<i class="fa-solid fa-temperature-low"></i> Temperature Converter`
                iteratorArrayOfObjects(temperature)
                fromSelect.addEventListener('change', updateDisabledOptions);
                toSelect.addEventListener('change', updateDisabledOptions);

            } else if (type === 'area') {

                document.getElementById('converter-title').innerHTML = `<i class="fa-solid fa-chart-area"></i> Area Converter`
                iteratorArrayOfObjects(area)
                fromSelect.addEventListener('change', updateDisabledOptions);
                toSelect.addEventListener('change', updateDisabledOptions);

            } else if (type === 'volume') {

                document.getElementById('converter-title').innerHTML = `<i class="fas fa-faucet"></i> Volume Converter`
                iteratorArrayOfObjects(volume)
                fromSelect.addEventListener('change', updateDisabledOptions);
                toSelect.addEventListener('change', updateDisabledOptions);

            } else if (type === 'weight') {

                document.getElementById('converter-title').innerHTML = `<i class="fa-solid fa-weight-scale"></i> Weight Converter`
                iteratorArrayOfObjects(weight)
                fromSelect.addEventListener('change', updateDisabledOptions);
                toSelect.addEventListener('change', updateDisabledOptions);

            } else if (type === 'time') {

                document.getElementById('converter-title').innerHTML = `<i class="fa-solid fa-clock"></i> Time Converter`
                iteratorArrayOfObjects(time)
                fromSelect.addEventListener('change', updateDisabledOptions);
                toSelect.addEventListener('change', updateDisabledOptions);

            }
        })
    })
    document.getElementById('convert-btn').addEventListener('click', ()=>{
        let value = document.getElementById('input-value-to-convert').value;
        let fromUnit = fromSelect.value;
        let toUnit = toSelect.value;
        // let convertedValue = convertWeight(value, fromUnit, toUnit);
        document.querySelectorAll('.nav-link.active').forEach(link =>{
            let type = link.getAttribute('data-type')
            if (type === 'length') {
                let convertedValue = convertLength(value, fromUnit, toUnit);
                document.getElementById('converted-value').value = convertedValue;
            } else if(type === 'temperature'){
                let convertedValue = convertTemperature(value, fromUnit, toUnit);
                document.getElementById('converted-value').value = convertedValue;
            } else if(type === 'area'){
                let convertedValue = convertArea(value, fromUnit, toUnit);
                document.getElementById('converted-value').value = convertedValue;
            } else if(type === 'volume'){
                let convertedValue = convertVolume(value, fromUnit, toUnit);
                document.getElementById('converted-value').value = convertedValue;
            } else if(type === 'weight'){
                let convertedValue = convertWeight(value, fromUnit, toUnit);
                document.getElementById('converted-value').value = convertedValue;
            } else{
                let convertedValue = convertTime(value, fromUnit, toUnit);
                document.getElementById('converted-value').value = convertedValue;
            }
        })
    })
})

function updateDisabledOptions() {
    const fromValue = fromSelect.value;
    const toValue = toSelect.value;

    Array.from(fromSelect.options).forEach(option => {
        option.disabled = option.value === toValue;
    });

    Array.from(toSelect.options).forEach(option => {
        option.disabled = option.value === fromValue;
    });
}

function iteratorArrayOfObjects(array){
    fromSelect.innerHTML = '';
    toSelect.innerHTML = '';
    fromSelect.innerHTML = '<option disabled selected style="color: black">Select Unit</option>';
    toSelect.innerHTML = '<option disabled selected style="color: black">Select Unit</option>';
    array.forEach(item => {
        let fromOption = document.createElement('option');
        fromOption.value = item;
        fromOption.innerHTML = item;
        fromSelect.appendChild(fromOption);
        fromOption.classList.add('fromOptions')

        let toOption = document.createElement('option');
        toOption.value = item;
        toOption.innerHTML = item;
        toSelect.appendChild(toOption);
        toOption.classList.add('toOptions')
    });
}

function convertLength(value, fromUnit, toUnit) {
    const lengthToMeter = {
        'Meter': 1,
        'Kilometer': 1000,
        'Centimeter': 0.01,
        'Millimeter': 0.001,
        'Micrometer': 1e-6,
        'Nanometer': 1e-9,
        'Mile': 1609.34,
        'Yard': 0.9144,
        'Foot': 0.3048,
        'Inch': 0.0254,
        'Light Year': 9.461e+15
    };

    let inMeters = +value * lengthToMeter[fromUnit];

    let converted = +inMeters / lengthToMeter[toUnit];

    return converted;
}

function convertArea(value, fromUnit, toUnit) {
    const areaToSquareMeter = {
        'Square Meter': 1,
        'Square Kilometer': 1e6,
        'Square Centimeter': 0.0001,
        'Square Millimeter': 0.000001,
        'Square Micrometer': 1e-12,
        'Square Mile': 2_589_988.11,
        'Square Yard': 0.836127,
        'Square Foot': 0.092903,
        'Square Inch': 0.00064516,
        'Hectare': 10_000,
        'Acre': 4_046.8564224
    };

    const inputInSquareMeters = +value * areaToSquareMeter[fromUnit];
    const result = inputInSquareMeters / areaToSquareMeter[toUnit];
    return result;
}

function convertVolume(value, fromUnit, toUnit) {
    const volumeToCubicMeter = {
        'Cubic Meter': 1,
        'Cubic Kilometer': 1e9,
        'Cubic Centimeter': 0.000001,
        'Liter': 0.001,
        'Milliliter': 0.000001
    };

    const inputInCubicMeters = +value * volumeToCubicMeter[fromUnit];
    const result = inputInCubicMeters / volumeToCubicMeter[toUnit];
    return result;
}

function convertWeight(value, fromUnit, toUnit) {
    const weightToKilogram = {
        'Kilogram': 1,
        'Gram': 0.001,
        'Milligram': 0.000001,
        'Ton': 1000,
        'Pound': 0.453592,
        'Ounce': 0.0283495
    };

    const inputInKilograms = +value * weightToKilogram[fromUnit];
    const result = inputInKilograms / weightToKilogram[toUnit];
    return result;
}

function convertTime(value, fromUnit, toUnit) {
    const timeToSeconds = {
        'Second': 1,
        'Minute': 60,
        'Hour': 3600,
        'Day': 86400,
        'Week': 604800,
        'Month': 2_629_746,
        'Year': 31_556_952  
    };

    const inputInSeconds = +value * timeToSeconds[fromUnit];
    const result = inputInSeconds / timeToSeconds[toUnit];
    return result;
}

function convertTemperature(value, fromUnit, toUnit) {
    let result;

    let celsius;
    if (fromUnit === 'Celsius') {
        celsius = value;
    } else if (fromUnit === 'Fahrenheit') {
        celsius = (value - 32) * 5 / 9;
    } else if (fromUnit === 'Kelvin') {
        celsius = value - 273.15;
    }

    if (toUnit === 'Celsius') {
        result = celsius;
    } else if (toUnit === 'Fahrenheit') {
        result = (celsius * 9 / 5) + 32;
    } else if (toUnit === 'Kelvin') {
        result = Number(celsius) + 273.15;
    }

    return result;
}










