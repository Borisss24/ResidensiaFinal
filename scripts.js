// Asegúrate de que el código se ejecute después de que el DOM se haya cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtén el contenedor del chatbot y el botón de cerrar
    const chatbotTrigger = document.getElementById('chatbotTrigger'); // Contenedor del avatar y el texto
    const chatbotWindow = document.getElementById('chatbotWindow');
    const closeChatbotBtn = document.getElementById('closeChatbot');

    // Mostrar el chatbot cuando se hace clic en el contenedor
    chatbotTrigger.addEventListener('click', function() {
        chatbotWindow.style.display = 'block'; // Muestra la ventana del chatbot
        chatbotTrigger.style.display = 'none'; // Oculta el contenedor de ayuda
    });

    // Cerrar el chatbot cuando se hace clic en la "X"
    closeChatbotBtn.addEventListener('click', function() {
        console.log('Cerrando el chatbot'); // Verifica que esta línea se ejecute
        chatbotWindow.style.display = 'none'; // Oculta la ventana del chatbot
        chatbotTrigger.style.display = 'flex'; // Muestra el contenedor de ayuda
    });

    // Funcionalidad para el menú de pestañas
    const tabs = document.querySelectorAll('.tab'); // Selecciona todas las pestañas
    const tabItems = document.querySelectorAll('.tab-item'); // Selecciona todos los elementos de contenido de las pestañas

    // Agrega el evento click a cada pestaña
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault(); // Evita el comportamiento predeterminado del enlace

            // Remueve la clase "active" de todas las pestañas
            tabs.forEach(t => t.classList.remove('active'));
            tabItems.forEach(item => item.classList.remove('active'));

            // Agrega la clase "active" a la pestaña seleccionada
            tab.classList.add('active');

            // Muestra el contenido correspondiente
            const target = this.getAttribute('data-tab');
            document.getElementById(target).classList.add('active');
        });
    });

    // Activa la primera pestaña por defecto
    if (tabs.length > 0) {
        tabs[0].click(); // Simula un clic en la primera pestaña para activarla
    }

    // Verifica si los elementos se seleccionan correctamente
    console.log(chatbotTrigger, chatbotWindow, closeChatbotBtn);
});
document.getElementById('closeChatbot').onclick = function() {
    document.getElementById('chatbotWindow').style.display = 'none';
    resetChatbot(); // Reiniciar el chatbot al cerrar
};

function showContent(option) {
    const content = document.getElementById('content');
    const optionsList = document.getElementById('optionsList');
    const backButton = document.getElementById('backButton');

    optionsList.style.display = 'none'; // Ocultar opciones
    backButton.style.display = 'block'; // Mostrar botón de volver

    switch (option) {
        case 'opcion1':
            content.innerHTML = "<h3>Respuesta a Pregunta Frecuente</h3><p>Aquí va la respuesta a la pregunta frecuente.</p>";
            break;
        case 'opcion2':
            content.innerHTML = "<h3>Información de Contacto</h3><p>Aquí va la información de contacto.</p>";
            break;
        case 'opcion3':
            content.innerHTML = "<h3>Acerca de Residencias</h3><p>Aquí va la información sobre residencias.</p>";
            break;
        case 'opcion4':
            content.innerHTML = "<h3>Reportar un Problema</h3><p>Aquí va la información para reportar un problema.</p>";
            break;
    }

    content.style.display = 'block'; // Mostrar contenido
}

function goBack() {
    document.getElementById('content').style.display = 'none'; // Ocultar contenido
    document.getElementById('optionsList').style.display = 'block'; // Mostrar opciones
    document.getElementById('backButton').style.display = 'none'; // Ocultar botón de volver
}

function resetChatbot() {
    goBack(); // Regresar a las opciones al cerrar
}
// Mostrar/Ocultar el primer PDF y su información
document.getElementById('showPdfButton').addEventListener('click', function() {
    const pdfContainer1 = document.getElementById('pdfContainer1');
    const pdfViewer1 = pdfContainer1.querySelector('.pdf-viewer');
    const additionalInfo1 = pdfContainer1.querySelector('.additional-info');

    if (pdfViewer1.style.display === 'none') {
        pdfViewer1.style.display = 'block';  // Muestra el PDF
        additionalInfo1.style.display = 'block';  // Muestra la información adicional
    } else {
        pdfViewer1.style.display = 'none';  // Oculta el PDF
        additionalInfo1.style.display = 'none';  // Oculta la información adicional
    }
});

// Mostrar/Ocultar el segundo PDF y su información
document.getElementById('showPdfButton2').addEventListener('click', function() {
    const pdfContainer2 = document.getElementById('pdfContainer2');
    const pdfViewer2 = pdfContainer2.querySelector('.pdf-viewer');
    const additionalInfo2 = pdfContainer2.querySelector('.additional-info');

    if (pdfViewer2.style.display === 'none') {
        pdfViewer2.style.display = 'block';  // Muestra el PDF
        additionalInfo2.style.display = 'block';  // Muestra la información adicional
    } else {
        pdfViewer2.style.display = 'none';  // Oculta el PDF
        additionalInfo2.style.display = 'none';  // Oculta la información adicional
    }
});
