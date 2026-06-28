document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. CONTROL DEL ABANICO DE TARJETAS (BIBLIA)
    // ==========================================
    const columns = document.querySelectorAll(".fan-column");
    const studyCard = document.getElementById("studyCard");
    const panelHandle = document.getElementById("panelHandle");

    if (panelHandle && studyCard) {
        panelHandle.addEventListener("click", () => {
            studyCard.classList.toggle("hidden");
            if (studyCard.classList.contains("hidden")) {
                columns.forEach(c => c.classList.remove("expanded-full"));
            }
        });
    }

    if (columns.length > 0) {
        columns.forEach(col => {
            col.addEventListener("click", (e) => {
                if (e.target.classList.contains("btn-close-extended")) return;
                columns.forEach(c => c.classList.remove("expanded-full"));
                col.classList.add("expanded-full");
            });

            const btnClose = col.querySelector(".btn-close-extended");
            if (btnClose) {
                btnClose.addEventListener("click", (e) => {
                    e.stopPropagation();
                    col.classList.remove("expanded-full");
                });
            }
        });
    }


    // ==========================================
    // 2. LÓGICA DE "CAMINEMOS CON JESÚS" (CORREGIDO)
    // ==========================================
    const moodButtons = document.querySelectorAll(".mood-buttons .badge");
    const moodResponse = document.getElementById("moodResponse");

    // El diccionario con las lecturas de la Biblia para cada estado
    const moodLectures = {
        optimo: {
            text: '"Todo lo puedo en Cristo que me fortalece."',
            verse: "Filipenses 4:13"
        },
        agradecido: {
            text: '"Entrad por sus puertas con acción de gracias, por sus atrios con alabanza..."',
            verse: "Salmo 100:4"
        },
        cansado: {
            text: '"Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar."',
            verse: "Mateo 11:28"
        },
        triste: {
            text: '"Cercano está Jehová a los quebrantados de corazón; y salva a los contritos de espíritu."',
            verse: "Salmo 34:18"
        }
    };

    if (moodButtons.length > 0 && moodResponse) {
        moodButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                // A. Apagamos el estado visual activo en todos los botones y se lo asignamos al seleccionado
                moodButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                // B. Leemos cuál identificador se presionó
                const selectedMood = btn.getAttribute("data-mood");

                // C. Reemplazamos dinámicamente el texto y versículo en el contenedor
                if (moodLectures[selectedMood]) {
                    moodResponse.innerHTML = `
                        <p class="mood-text">${moodLectures[selectedMood].text}</p>
                        <span class="mood-verse">${moodLectures[selectedMood].verse}</span>
                    `;
                }
            });
        });
    }

});