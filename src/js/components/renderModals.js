function createDoctorModals(doctors) {
	const modalContainer = document.createElement('div') // Контейнер для всех модальных окон
	modalContainer.id = 'modals-container'

	Object.keys(doctors).forEach(key => {
		const doctor = doctors[key]
		const modal = document.createElement('div')
		modal.className = 'modal fade'
		modal.id = `modal-staff-${key}`
		modal.tabIndex = -1
		modal.setAttribute('aria-hidden', 'true')

		modal.innerHTML = `
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <button type="button" class="btn btn-close" data-bs-dismiss="modal" aria-label="Close">
            <span class="icon">
              <svg>
                <use xlink:href="img/icons/close.svg#svg-close"></use>
              </svg>
            </span>
          </button>
          <div class="modal-body">
            <picture data-transfer-origin="modal-staff-picture-${key}" data-transfer-breakpoint="992" data-transfer-placement="first">
              <img loading="lazy" src="${doctor.image}" class="image" width="270" height="350" alt="Картинка">
            </picture>
            <div class="modal-info">
              <div class="modal-info-header" data-transfer-target="modal-staff-picture-${key}">
                <div>
                  <h2 class="modal-info-title">${doctor.fullName()}</h2>
                  <p class="modal-info-job">${doctor.position}</p>
                </div>
              </div>
              ${
                doctor.details && doctor.details.trim() 
                ? `<p class="modal-info-descr">${doctor.details}</p>` 
                : ''
              }
							${doctor.skills && doctor.skills.length > 0 
								? `
								<div class="accordion">
									<div class="accordion-item">
										<h2 class="accordion-header">
											<button class="accordion-button" type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapse-staff-${key}"
												aria-expanded="true"
												aria-controls="collapse-staff-${key}">
												Профессиональные навыки
												<span class="icon accordion-button-icon">
													<svg>
														<use xlink:href="img/icons/chevron-up.svg#svg-chevron-up"></use>
													</svg>
												</span>
											</button>
										</h2>
										<div id="collapse-staff-${key}" class="accordion-collapse collapse show">
											<div class="accordion-body">
												<div class="accordion-body-content">
													<ul class="list-reset modal-info-list">
														${doctor.skills.map(skill => `<li class="modal-info-item">${skill}</li>`).join('')}
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								` : ''
							}
              <div class="modal-info-footer">
                <div class="modal-info-detail">
                  <h4 class="modal-info-detail-title">Образование</h4>
                  <ul class="list-reset modal-info-detail-list">
                    ${doctor.education.map(item => `
                      <li class="modal-info-detail-item" data-popover>
                        <span class="tooltip">${item.detail}</span>
                        <picture>
                          <img loading="lazy" src="${item.icon}" class="modal-info-detail-image" width="60" height="60" alt="Картинка">
                        </picture>
                      </li>
                    `).join('')}
                  </ul>
                </div>
                <div class="modal-info-detail">
                  <h4 class="modal-info-detail-title">Повышение квалификации</h4>
                  <ul class="list-reset modal-info-detail-list">
                    ${doctor.raising.map(item => `
                      <li class="modal-info-detail-item" data-popover>
                        <span class="tooltip">${item.detail}</span>
                        <picture>
                          <img loading="lazy" src="${item.icon}" class="modal-info-detail-image" width="60" height="60" alt="Картинка">
                        </picture>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `

		modalContainer.appendChild(modal)
	})

	document.body.appendChild(modalContainer)
}

createDoctorModals(window.objectDoctors)