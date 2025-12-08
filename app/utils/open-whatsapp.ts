export default function openWhatsapp() {
    const whatsappNumber = '5547991611628'
    const whatsappMessage = 'Olá! Tenho interesse nos filhotes de Golden Retriever 🐕'

     const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
     window.open(url, '_blank')
}