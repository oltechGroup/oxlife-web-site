
import './Mantenimiento.css';
import logoOxlife from '../assets/logo_oxlife.svg';

function Mantenimiento() {
  return (
    <main className="maintenance-page">
      <div className="maintenance-card">
        <img
          src={logoOxlife}
          alt="OXLIFE"
          className="maintenance-logo"
        />

        <div className="maintenance-icon" aria-hidden="true">
          <i className="fas fa-tools"></i>
        </div>

        <p className="maintenance-label">
          SITIO EN MANTENIMIENTO
        </p>

        <h1>Estamos mejorando para ti</h1>

        <p className="maintenance-description">
          En OXLIFE trabajamos para ofrecerte una mejor experiencia.
          En este momento estamos realizando mejoras en nuestro sitio web.
        </p>

        <p className="maintenance-notice">
          Volveremos pronto. Gracias por tu comprensiÃ³n.
        </p>

        <div className="maintenance-footer">
          OXLIFE Â· InnovaciÃ³n y calidad
        </div>
      </div>
    </main>
  );
}

export default Mantenimiento;

