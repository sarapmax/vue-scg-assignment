<template>
  <div>
    <div class="card">
      <div class="card-body">
        Please create a small project using Line messaging API for getting a notification when
        your Line Bot can not answer a question to the customer more than 10 second
      </div>
    </div>
    <div class="mt-4">
      <p class="font-weight-bold">The following steps represent how to add the line bot to your Line app and test it out.</p>
      <div>
        <p>1. Add the line bot account to your Line using this QRCode</p>
        <img class="w-25" src="../assets/line-bot-qrcode.png">
      </div>
      <div>
        <p>2. Try typing 'Hi' or 'How are you doing?'. The Line bot only understands these 2 commands. Other than that,
          he will wait for 10 seconds and notify that he doesn't understand your message.</p>
        <img class="w-25" src="../assets/line-bot-actions.gif">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LineBot'
}
</script>

<style scoped>

</style>
