import './App.css';
import { useNavigate } from "react-router-dom";


const App = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div class="topnav">
        <div class="active">Home</div>
        <div onClick={() => navigate('/dienstleistungen')}>Dienstleistungen</div>
        <div onClick={() => navigate('/kontakt')}>Kontakt</div>
        <div onClick={() => navigate('/impressum')}>Impressum</div>
      </div>

      <div className="heading">
        <h1>
          <div className="tiny-space"><font color="#4e7de9"><strong>M</strong></font>atthias</div>
          <div className="tiny-space"><font color="#4e7de9"><strong>M</strong></font>elk</div>
          <div className="tiny-space"><strong>A</strong>utomobile</div>
        </h1>
        <div className="tiny-space">Gebrauchte Automobile aus Meisterhand</div>
      </div>

      <div className="textbox">
        <h2>Philosophie und mein Versprechen</h2>
        Als Kfz-Meister und Betriebswirt mit 35 Jahren Erfahrung in der Kfz-Branche habe ich mich darauf spezialisiert gezielt Fahrzeuge zu suchen und zu verkaufen die meinen hohen Ansprüchen entsprechen.
        Ich vertreibe nur Fahrzeuge, die eine nachvollziehbare Historie haben und lückenlos nach den Herstellervorgaben gewartet worden sind und entsprechend dokumentiert (Serviceheft) wurden.
        Diese Rahmenbedingungen gewährleisten dem Käufer eine sichere und sorgenfreie Mobilität.
      </div>

      <div className="textbox">
        <h2>Unser Anspruch</h2>
        Wir sind ein inhabergeführter Kfz-Handelsbetrieb mit Menschen, die sich persönlich für sie engagieren und Verantwortung übernehmen.
        Jeder Kontakt und Dialog mit Ihnen ist uns wichtig und bereitet uns Freude.
        Als Interessent und Kunde stehen sie für uns im Mittelpunkt, verbunden mit dem Ziel das sie mit dem Fahrzeug und unseren Dienstleistungen rund um das Auto vollkommen zufrieden sind.
      </div>
    </div>
  );
}

export default App;