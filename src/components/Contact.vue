<template>
  <form id="contactForm" ref="form" @submit="send">
    <label>Name</label>
    <input type="text" placeholder="Name" name="name" required />
    <label>Email Address</label>
    <input type="email" placeholder="Email Address" name="email" required />
    <label>Message</label>
    <textarea rows="5" placeholder="Message" name="content" required></textarea>
    <div id="toast" ref="toast"></div>
    <button type="submit" id="submit" ref="submit">
      Send
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      url:
        'https://82tsi557bh.execute-api.us-east-1.amazonaws.com/dev/email/send'
    };
  },
  methods: {
    post(url, body, callback) {
      const req = new XMLHttpRequest();
      req.open('POST', url, true);
      req.setRequestHeader('Content-Type', 'application/json');
      req.addEventListener('load', function() {
        if (req.status < 400) {
          callback(null, JSON.parse(req.responseText));
        } else {
          callback(new Error('Request failed: ' + req.statusText));
        }
      });
      req.send(JSON.stringify(body));
    },
    success() {
      this.$refs.toast.innerHTML =
        "Thanks for sending me a message! I'll get in touch with you ASAP. :)";
      this.$refs.submit.disabled = false;
      this.$refs.submit.blur();
      this.$refs.form.name.focus();
      this.$refs.form.name.value = '';
      this.$refs.form.email.value = '';
      this.$refs.form.content.value = '';
    },
    error(err) {
      this.$refs.toast.innerHTML =
        'There was an error with sending your message, hold up until I fix it. Thanks for waiting.';
      this.$refs.submit.disabled = false;
      console.log(err);
    },
    send(e) {
      const vm = this;

      e.preventDefault();
      this.$refs.toast.innerHTML = 'Sending';
      this.$refs.submit.disabled = true;

      const payload = {
        name: this.$refs.form.name.value,
        email: this.$refs.form.email.value,
        content: this.$refs.form.content.value
      };
      this.post(this.url, payload, function(err, res) {
        if (err) {
          return vm.error(err);
        }
        vm.success();
      });
    }
  }
};
</script>

<style lang="sass" scoped></style>
