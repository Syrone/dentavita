for (const key in window.objectDoctors) {
  if (window.objectDoctors.hasOwnProperty(key)) {
    const doctor = window.objectDoctors[key]

    const cardHTML = `
      <div class="swiper-slide">
        <article class="card">
          <button type="button" class="stretched-link"
            data-bs-toggle="modal"
            data-bs-target="#modal-staff-${key}"></button> 
          <div class="card-pictures">
            <span class="card-placeholder">
              Подробнее
              <span class="icon">
                <svg>
                  <use xlink:href="img/icons/plus.svg#svg-plus"></use>
                </svg>
              </span>
            </span>
            <img loading="lazy" src="${doctor.image}" class="card-image" width="264" height="375" alt="Картинка"> 
          </div>
          <h3 class="card-title">${doctor.surname} ${doctor.name[0].toUpperCase()}. ${doctor.patronymic[0].toUpperCase()}.</h3>
          <p class="card-text">${doctor.position}</p>
        </article>
      </div>
    `

    document.querySelectorAll('.staff .swiper-wrapper')?.forEach((element) => {
			element.insertAdjacentHTML('beforeend', cardHTML)
		})
  }
}