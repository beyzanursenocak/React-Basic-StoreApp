export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 20;
  const isOpen  = hour >= openHour && hour <= closeHour

  return (
    <footer>
      {      
        isOpen ? (
          <p>Akşam { closeHour + '.00' } kadar açığız</p>
        ) : 
        (
          <p>Şuan kapalıyız. Açılş saatimiz { openHour + '.00' }</p>
        )
      }
    </footer>
  )
}
