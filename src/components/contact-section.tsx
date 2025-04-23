const ContactSection = () => {
  return (
    <section id="contact">
      <h2>문의하기</h2>
      <form>
        <label>이름: <input type="text" required /></label><br />
        <label>이메일: <input type="email" /></label><br />
        <label>메시지:<br /><textarea></textarea></label><br />
        <button type="submit">보내기</button>
      </form>
    </section>
  );
}

export default ContactSection;
