// Premium Dark Mode UI Logic

const checkAuth = () => {
    const path = window.location.pathname.toLowerCase();
    const isLoginPage = path.includes('index.html') ||
        path.includes('formulaire-role.html') ||
        path === '/' ||
        path.endsWith('/');

    const userName = localStorage.getItem('userName');
    const userRole = localStorage.getItem('userRole');

    if (!isLoginPage && (!userName || !userRole)) {
        console.warn("Accès refusé : redirection vers la page de connexion.");
        window.location.href = 'index.html';
    }
};

// Execute check immediately
checkAuth();

// Real Data from User Excel
const roomsDB = [
    {
        id: 'salle1',
        name: 'Salle 1',
        loc: 'Bâtiment A – Étage 1',
        cap: '60 Pers.',
        img: 'images/salle%20cours.PNG',
        feats: ['Tableau', 'datashow', 'tables', 'chaises']
    },
    {
        id: 'salle2',
        name: 'Salle 2',
        loc: 'Bâtiment A – Étage 1',
        cap: '60 Pers.',
        img: 'images/salle%20cours.PNG',
        feats: ['Tableau', 'datashow', 'tables', 'chaises']
    },
    {
        id: 'salle3',
        name: 'Salle 3',
        loc: 'Bâtiment A – Étage 1',
        cap: '60 Pers.',
        img: 'images/salle%20cours.PNG',
        feats: ['Tableau', 'datashow', 'tables', 'chaises']
    },
    {
        id: 'salle4',
        name: 'Salle 4',
        loc: 'Bâtiment B – Étage 1',
        cap: '60 Pers.',
        img: 'images/salle%20cours.PNG',
        feats: ['Tableau', 'datashow', 'tables', 'chaises']
    },
    {
        id: 'salle5',
        name: 'Salle 5',
        loc: 'Bâtiment B – Étage 1',
        cap: '60 Pers.',
        img: 'images/salle%20cours.PNG',
        feats: ['Tableau', 'datashow', 'tables', 'chaises']
    },
    {
        id: 'salle6',
        name: 'Salle 6',
        loc: 'Bâtiment B – Étage 1',
        cap: '65 Pers.',
        img: 'images/salle%20cours.PNG',
        feats: ['Tableau', 'datashow', 'tables', 'chaises']
    },
    {
        id: 'grand_amphi',
        name: 'Grand Amphi',
        loc: 'Bâtiment C – RDC',
        cap: '300 Pers.',
        img: 'images/grandamphi.PNG',
        feats: ['Tableau', 'écran', 'datashow', 'micros', 'sonorisation', 'siège mobile']
    },
    {
        id: 'mini_amphi2',
        name: 'Mini Amphi 2',
        loc: 'Bâtiment C – RDC',
        cap: '120 Pers.',
        img: 'images/mini%20amphi%201-6.PNG',
        feats: ['Tableau', 'écran', 'datashow', 'micro', 'sonorisation']
    },
    {
        id: 'mini_amphi3',
        name: 'Mini Amphi 3',
        loc: 'Bâtiment C – RDC',
        cap: '120 Pers.',
        img: 'images/mini%20amphi%201-6.PNG',
        feats: ['Tableau', 'écran', 'datashow', 'micro', 'sonorisation']
    },
    {
        id: 'mini_amphi4',
        name: 'Mini Amphi 4',
        loc: 'Bâtiment B – RDC',
        cap: '150 Pers.',
        img: 'images/mini%20amphi%201-6.PNG',
        feats: ['Tableau', 'écran', 'datashow', 'micro', 'sonorisation']
    },
    {
        id: 'mini_amphi5',
        name: 'Mini Amphi 5',
        loc: 'Bâtiment B – RDC',
        cap: '150 Pers.',
        img: 'images/mini%20amphi%201-6.PNG',
        feats: ['Tableau', 'écran', 'datashow', 'micro', 'sonorisation']
    },
    {
        id: 'hall',
        name: 'Hall',
        loc: 'RDC',
        cap: '100 Pers.',
        img: 'images/hall.PNG',
        feats: ['Cafétéria', 'tables', 'chaises', 'distributeurs', 'espace détente']
    },
    {
        id: 'biblio',
        name: 'Bibliotheque',
        loc: 'Bâtiment C – Étage 1',
        cap: '150 Pers.',
        img: 'images/bibliotheque.PNG',
        feats: ['Tables de travail', 'chaises', 'ordinateurs', 'rayonnages', 'Wi‑Fi']
    },
    {
        id: 'amphi_polyvalent',
        name: 'Amphi polyvalent',
        loc: 'Bâtiment C – Étage 1',
        cap: '250 Pers.',
        img: 'images/amphi_polyvalent.PNG',
        feats: ['Tableau', 'écran géant', 'datashow', 'micros', 'sonorisation', 'siège mobile']
    },
    {
        id: 'salle8',
        name: 'Salle 8',
        loc: 'Bâtiment B – RDC',
        cap: '40 Pers.',
        img: 'images/Capture.PNG',
        feats: ['Tableau', 'datashow', 'tables', 'chaises']
    },
    {
        id: 'salle9',
        name: 'Salle 9',
        loc: 'Bâtiment B – RDC',
        cap: '40 Pers.',
        img: 'images/Capture.PNG',
        feats: ['Tableau', 'datashow', 'tables', 'chaises']
    },
    {
        id: 'salle10',
        name: 'Salle 10',
        loc: 'Bâtiment B – RDC',
        cap: '40 Pers.',
        img: 'images/salle%2020.PNG',
        feats: ['Tableau', 'datashow', 'tables', 'chaises']
    },
    {
        id: 'amphi_bleu',
        name: 'Amphi Bleu',
        loc: 'Bâtiment C – Étage 2',
        cap: '100 Pers.',
        img: 'images/amphibleu.jpg',
        feats: ['Sonorisation', 'Vidéo-projecteur', 'Climatisation']
    }
];

// Reservations list will be loaded exclusively from LocalStorage
const reservations = [];

const initSidebar = () => {
    const toggleBtn = document.querySelector(".mobile-toggle");
    const sidebar = document.querySelector(".sidebar");

    if (toggleBtn && sidebar) {
        const userName = localStorage.getItem('userName') || 'Utilisateur';
        const userRole = localStorage.getItem('userRole') || 'Visiteur';

        console.log("Initialisation Sidebar - User:", userName, "Role:", userRole);

        const roleBadge = userRole === 'gestionnaire' ? '<span class="status-badge status-validee" style="font-size: 0.6rem; padding: 2px 6px;">Admin</span>' : '';

        const profileHtml = `
            <div class="sidebar-profile">
                <div class="profile-img-mini">
                    <i class="fas fa-user-circle"></i>
                </div>
                <div class="profile-info-mini">
                    <h4>${userName} ${roleBadge}</h4>
                    <span>${userRole}</span>
                </div>
            </div>
        `;
        const brand = sidebar.querySelector(".brand");
        if (brand) {
            brand.insertAdjacentHTML('afterend', profileHtml);
        } else {
            sidebar.insertAdjacentHTML('afterbegin', profileHtml);
        }

        // Insert Manager Link if role is gestionnaire
        const isManager = userRole.toLowerCase() === 'gestionnaire';
        if (isManager) {
            const navMenu = sidebar.querySelector(".nav-menu");
            if (navMenu) {
                // Remove existing to avoid duplicates if re-initialized
                const existingAdmin = document.getElementById("admin-nav-item");
                if (existingAdmin) existingAdmin.remove();

                const isGestionPage = window.location.pathname.toLowerCase().includes('gestion-reservations.html');
                const adminLinkHtml = `
                    <li id="admin-nav-item">
                        <a href="gestion-reservations.html" class="nav-link ${isGestionPage ? 'active' : ''}">
                            <i class="fas fa-tasks"></i>
                            <span>Gestion des Salles</span>
                        </a>
                    </li>
                `;
                console.log("Insertion du lien Manager...");

                // Find "À Propos" to insert before it
                const aboutLink = navMenu.querySelector('a[href="a-propos.html"]')?.parentElement;
                if (aboutLink) {
                    aboutLink.insertAdjacentHTML('beforebegin', adminLinkHtml);
                } else {
                    navMenu.insertAdjacentHTML('beforeend', adminLinkHtml);
                }
            }
        }

        const logoutHtml = `
            <div class="logout-container">
                <button class="btn-logout" onclick="handleLogout()">
                    <i class="fas fa-sign-out-alt"></i>
                    <span>Déconnexion</span>
                </button>
            </div>
        `;
        sidebar.insertAdjacentHTML('beforeend', logoutHtml);

        toggleBtn.addEventListener("click", () => {
            sidebar.classList.toggle("mobile-open");
            const icon = toggleBtn.querySelector("i");
            if (sidebar.classList.contains("mobile-open")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");
            } else {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });

        document.addEventListener("click", (e) => {
            if (window.innerWidth <= 1024 &&
                !sidebar.contains(e.target) &&
                !toggleBtn.contains(e.target) &&
                sidebar.classList.contains("mobile-open")) {
                sidebar.classList.remove("mobile-open");
                toggleBtn.querySelector("i")?.classList.remove("fa-times");
                toggleBtn.querySelector("i")?.classList.add("fa-bars");
            }
        });
    }
};

const handleLogout = () => {
    if (confirm("Voulez-vous vraiment vous déconnecter ?")) {
        localStorage.clear();
        window.location.href = 'index.html';
    }
};

const renderRooms = () => {
    const grid = document.getElementById("rooms-grid");
    const loader = document.getElementById("rooms-loader");
    if (!grid) return;
    if (loader) loader.style.display = 'none';

    let html = '';
    roomsDB.forEach(room => {
        const featuresHtml = room.feats.map(f => `<span class="feature"><i class="fas fa-check"></i>${f}</span>`).join('');
        html += `
        <article class="card">
            <div class="card-body">
                <span class="card-location">${room.loc}</span>
                <h2 class="card-title">${room.name}</h2>
                <img src="${room.img}" alt="${room.name}" class="card-image">
                <div class="card-features">
                    ${featuresHtml}
                    <span class="feature"><i class="fas fa-users"></i> ${room.cap}</span>
                </div>
                <div class="card-footer">
                    <span class="capacity">Disponible</span>
                    <a href="reservation.html?room=${room.id}" class="btn btn-outline">Réserver</a>
                </div>
            </div>
        </article>
        `;
    });
    grid.innerHTML = html;
};

const initReservationSelect = () => {
    const select = document.getElementById("room-select");
    if (!select) return;
    select.innerHTML = '';
    roomsDB.forEach(room => {
        const option = document.createElement("option");
        option.value = room.id;
        option.text = `${room.name} (${room.loc})`;
        select.appendChild(option);
    });
};

const initCalendar = () => {
    const calendarDays = document.querySelector("#calendar-days");
    if (!calendarDays) return;
    const date = new Date();
    const renderCalendar = () => {
        date.setDate(1);
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        let firstDayIndex = date.getDay();
        const diffForMondayStart = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
        const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
        document.querySelector("#month-name").innerText = months[date.getMonth()];
        document.querySelector("#year").innerText = date.getFullYear();
        let daysHtml = "";
        for (let x = diffForMondayStart; x > 0; x--) {
            daysHtml += `<div class="day-cell empty" style="opacity: 0.3;"><span class="day-number">${prevLastDay - x + 1}</span></div>`;
        }
        for (let i = 1; i <= lastDay; i++) {
            const currentMonth = date.getMonth() + 1;
            const yearStr = date.getFullYear();
            const monthStr = currentMonth < 10 ? `0${currentMonth}` : currentMonth;
            const dayStr = i < 10 ? `0${i}` : i;
            const fullDate = `${yearStr}-${monthStr}-${dayStr}`;
            let userRes = [];
            try {
                userRes = JSON.parse(localStorage.getItem('myReservations') || '[]');
                if (!Array.isArray(userRes)) userRes = [];
            } catch (e) {
                console.error("Erreur lecture reservations:", e);
                userRes = [];
            }
            const allEvents = userRes.filter(r => r.date === fullDate);

            let eventsHtml = "";
            allEvents.forEach(evt => {
                const typeClass = evt.type === 'conference' ? 'conference' : '';

                // Unified Status Mapping
                let statusClass = 'status-validee'; // Default
                if (evt.status) {
                    const s = evt.status.toLowerCase();
                    if (s.includes('valid')) statusClass = 'status-validee';
                    else if (s.includes('refus')) statusClass = 'status-refusee';
                    else if (s.includes('attente')) statusClass = 'status-attente';
                }

                eventsHtml += `<div class="event-pill ${typeClass} ${statusClass}">${evt.start} ${evt.room}</div>`;
            });
            const today = new Date();
            const isToday = i === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
            const todayClass = isToday ? "today" : "";
            daysHtml += `<div class="day-cell ${todayClass}"><span class="day-number">${i}</span><div class="events-container">${eventsHtml}</div></div>`;
        }
        const totalCells = diffForMondayStart + lastDay;
        const remainingCells = (totalCells % 7 === 0) ? 0 : 7 - (totalCells % 7);
        for (let j = 1; j <= remainingCells; j++) {
            daysHtml += `<div class="day-cell empty" style="opacity: 0.3;"><span class="day-number">${j}</span></div>`;
        }
        calendarDays.innerHTML = daysHtml;
    };
    document.querySelector("#prev-month")?.addEventListener("click", () => { date.setMonth(date.getMonth() - 1); renderCalendar(); });
    document.querySelector("#next-month")?.addEventListener("click", () => { date.setMonth(date.getMonth() + 1); renderCalendar(); });
    document.querySelector("#today-btn")?.addEventListener("click", () => { const now = new Date(); date.setMonth(now.getMonth()); date.setFullYear(now.getFullYear()); renderCalendar(); });
    renderCalendar();
};

const initForm = () => {
    const form = document.querySelector(".reservation-form");
    if (!form) return;
    const urlParams = new URLSearchParams(window.location.search);
    const roomParam = urlParams.get('room');
    if (roomParam) {
        const select = document.getElementById("room-select");
        if (select) select.value = roomParam;
    }
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const roomId = document.getElementById("room-select").value;
        const dateVal = form.querySelector('input[type="date"]').value;
        const startVal = form.querySelectorAll('input[type="time"]')[0].value;
        const endVal = form.querySelectorAll('input[type="time"]')[1].value;
        const reasonVal = form.querySelector('textarea')?.value || "Standard";

        // 1. Validation: Heure de début < Heure de fin
        if (startVal >= endVal) {
            alert("❌ Erreur : L'heure de début doit être inférieure à l'heure de fin.");
            return;
        }

        // 2. Validation: Conflits de réservation
        let existing = [];
        try {
            existing = JSON.parse(localStorage.getItem('myReservations') || '[]');
            if (!Array.isArray(existing)) existing = [];
        } catch (e) {
            existing = [];
        }

        const conflict = existing.find(res => {
            // Même salle et même date
            const sameRoom = String(res.roomId) === String(roomId);
            const sameDate = res.date === dateVal;
            const notRefused = res.status && !res.status.toLowerCase().includes('refus');

            if (sameRoom && sameDate && notRefused) {
                // Vérification chevauchement [startVal, endVal] vs [res.start, res.end]
                const startMax = startVal > res.start ? startVal : res.start;
                const endMin = endVal < res.end ? endVal : res.end;
                const isOverlapping = startMax < endMin;

                console.log("Validation Conflit - Comparaison:", {
                    demande: { start: startVal, end: endVal },
                    existant: { start: res.start, end: res.end },
                    isOverlapping
                });

                return isOverlapping;
            }
            return false;
        });

        if (conflict) {
            console.warn("Conflit détecté avec:", conflict);
            alert(`⚠️ Conflit : Cette salle est déjà réservée (ou en attente) de ${conflict.start} à ${conflict.end} par ${conflict.userName}.`);
            return;
        }

        const roomObj = roomsDB.find(r => r.id === roomId);
        const newReservation = {
            id: Date.now(),
            date: dateVal,
            room: roomObj ? roomObj.name : 'Inconnue',
            roomId: roomId,
            start: startVal,
            end: endVal,
            type: reasonVal,
            status: 'En attente',
            userName: localStorage.getItem('userName') || 'Inconnu',
            userEmail: localStorage.getItem('userEmail') || '-'
        };

        existing.push(newReservation);
        localStorage.setItem('myReservations', JSON.stringify(existing));
        const btn = form.querySelector("button[type='submit']");
        btn.innerText = "Traitement...";
        btn.disabled = true;
        setTimeout(() => {
            alert("✅ Réservation envoyée ! Elle apparaîtra dans vos réservations.");
            window.location.href = "mes-reservations.html";
        }, 800);
    });
};

const updateReservationStatus = (resId, newStatus) => {
    try {
        let allRes = JSON.parse(localStorage.getItem('myReservations') || '[]');
        if (!Array.isArray(allRes)) allRes = [];
        const index = allRes.findIndex(r => r.id === parseInt(resId));
        if (index !== -1) {
            allRes[index].status = newStatus;
            localStorage.setItem('myReservations', JSON.stringify(allRes));
            return true;
        }
    } catch (e) {
        console.error("Erreur update status:", e);
    }
    return false;
};

// Manager Dashboard Rendering Logic
const renderManagerRequests = () => {
    const container = document.getElementById('manager-table-body');
    const emptyState = document.getElementById('manager-empty');
    if (!container) return;

    let allRes = [];
    try {
        allRes = JSON.parse(localStorage.getItem('myReservations') || '[]');
        console.log("Manager Dashboard - Data loaded:", allRes);
    } catch (e) {
        console.error("Manager Dashboard - Error loading data:", e);
    }

    // Stats updates
    const statTotal = document.getElementById('stat-total');
    const statPending = document.getElementById('stat-pending');
    const statApproved = document.getElementById('stat-approved');

    if (statTotal) statTotal.textContent = allRes.length;
    if (statPending) statPending.textContent = allRes.filter(r => r.status === 'En attente').length;
    if (statApproved) statApproved.textContent = allRes.filter(r => r.status === 'Validée').length;

    if (allRes.length === 0) {
        container.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }

    if (emptyState) emptyState.style.display = 'none';
    const sortedRes = [...allRes].reverse();

    const getStatusClass = (status) => {
        if (!status) return 'status-attente';
        const s = status.toLowerCase();
        if (s.includes('valid')) return 'status-validee';
        if (s.includes('refus')) return 'status-refusee';
        return 'status-attente';
    };

    const getStatusIcon = (status) => {
        if (!status) return 'fas fa-clock';
        const s = status.toLowerCase();
        if (s.includes('valid')) return 'fas fa-check';
        if (s.includes('refus')) return 'fas fa-times';
        return 'fas fa-clock';
    };

    container.innerHTML = sortedRes.map(res => `
        <tr>
            <td>
                <div class="user-cell">
                    <div class="user-avatar">${(res.userName || 'U').charAt(0)}</div>
                    <div>
                        <div style="font-weight: 600; font-size: 0.9rem;">${res.userName || 'Inconnu'}</div>
                        <div style="font-size: 0.75rem; color: var(--text-muted);">${res.userEmail || '-'}</div>
                    </div>
                </div>
            </td>
            <td><div style="font-weight: 500;">${res.room || 'Salle'}</div></td>
            <td>
                <div style="font-size: 0.85rem;">${res.date || '-'}</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">${res.start || ''} - ${res.end || ''}</div>
            </td>
            <td><div style="font-size: 0.8rem; max-width: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${res.type || '-'}</div></td>
            <td>
                <span class="status-badge ${getStatusClass(res.status)}">
                    <i class="${getStatusIcon(res.status)}"></i>
                    ${res.status || 'En attente'}
                </span>
            </td>
            <td>
                <div class="action-btns">
                    <button class="btn-action btn-check" onclick="handleUpdateStatus(${res.id}, 'Validée')" title="Valider"><i class="fas fa-check"></i></button>
                    <button class="btn-action btn-times" onclick="handleUpdateStatus(${res.id}, 'Refusée')" title="Refuser"><i class="fas fa-times"></i></button>
                </div>
            </td>
        </tr>
    `).join('');
};

window.handleUpdateStatus = (id, newStatus) => {
    if (updateReservationStatus(id, newStatus)) {
        renderManagerRequests();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    initSidebar();
    renderRooms();
    initReservationSelect();
    initCalendar();
    initForm();
    if (window.location.pathname.includes('gestion-reservations.html')) {
        renderManagerRequests();
    }
});
const resetData = () => {
    if (confirm("⚠️ Voulez-vous vraiment supprimer TOUTES les réservations ? Cette action est irréversible.")) {
        localStorage.removeItem('myReservations');
        alert("✅ Base de données réinitialisée !");
        window.location.reload();
    }
};
