document.getElementById("carForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário para realizar a validação

    let isValid = true;

    // Validação do título
    const title = document.getElementById("title");
    const titleError = document.getElementById("titleError");
    if (title.value.trim() === "") {
        titleError.textContent = "O título é obrigatório.";
        titleError.style.display = "block";
        isValid = false;
    } else {
        titleError.style.display = "none";
    }

    // Validação do preço
    const price = document.getElementById("price");
    const priceError = document.getElementById("priceError");
    if (price.value === "") {
        priceError.textContent = "O preço é obrigatório.";
        priceError.style.display = "block";
        isValid = false;
    
    } else if (parseFloat(price.value) <= 0) {
        priceError.textContent = "O preço deve ser maior que zero.";
        priceError.style.display = "block";
        isValid = false;
    
    } else {
        priceError.style.display = "none";
    }

    // Validação da descrição
    const description = document.getElementById("description");
    const descriptionError = document.getElementById("descriptionError");
    if (description.value.trim() === "") {
        descriptionError.textContent = "A descrição é obrigatória.";
        descriptionError.style.display = "block";
        isValid = false;
    
    } else {
        descriptionError.style.display = "none";
    }

    // Validação da marca
    const brand = document.getElementById("brand");
    const brandError = document.getElementById("brandError");
    if (brand.value.trim() === "") {
        brandError.textContent = "A marca é obrigatória.";
        brandError.style.display = "block";
        isValid = false;
    
    } else {
        brandError.style.display = "none";
    }

    // Validação do modelo
    const model = document.getElementById("model");
    const modelError = document.getElementById("modelError");
    if (model.value.trim() === "") {
        modelError.textContent = "O modelo é obrigatório.";
        modelError.style.display = "block";
        isValid = false;
    
    } else {
        modelError.style.display = "none";
    }

    // Validação da kilometragem
    const mileage = document.getElementById("mileage");
    const mileageError = document.getElementById("mileageError");
    if (mileage.value === "" || parseInt(mileage.value) < 0) {
        mileageError.textContent = "A kilometragem é obrigatória e deve ser maior que zero.";
        mileageError.style.display = "block";
        isValid = false;
    
    } else {
        mileageError.style.display = "none";
    }

    // Validação da data de compra
    const purchaseDate = document.getElementById("purchase-date");
    const purchaseDateError = document.getElementById("purchaseDateError");
    if (purchaseDate.value === "") {
        purchaseDateError.textContent = "A data de compra é obrigatória.";
        purchaseDateError.style.display = "block";
        isValid = false;
    
    } else {
        purchaseDateError.style.display = "none";
    }

    // Validação do tipo de câmbio
    const gear = document.querySelector('input[name="gear"]:checked');
    const gearError = document.getElementById("gearError");
    if (!gear) {
        gearError.textContent = "Selecione o tipo de câmbio.";
        gearError.style.display = "block";
        isValid = false;
    
    } else {
        gearError.style.display = "none";
    }

    // Validação das imagens
    const images = document.getElementById("images");
    const imagesError = document.getElementById("imagesError");
    if (images.files.length === 0) {
        imagesError.textContent = "Envie pelo menos uma imagem.";
        imagesError.style.display = "block";
        isValid = false;
    
    } else {
        imagesError.style.display = "none";
    }

    // Exibir modal de sucesso se o formulário for válido
    if (isValid) {
        const successModal = document.getElementById("successMessage");
        successModal.style.display = "flex"; // Exibe o modal

        // Fecha o modal após 3 segundos
        setTimeout(function() {
            successModal.style.display = "none";
            document.getElementById("carForm").reset(); // Limpa o formulário
        }, 3000);
    }
});