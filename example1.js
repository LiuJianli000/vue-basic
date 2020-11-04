let vm = new Vue({
  el: '#example',
  data: {
    message: 'hello',
    firstName: 'Foo',
    lastName: 'Bar',
  },
  computed: {
    fullName: {
      get: function() {
        return this.firstName + ' ' + this.lastName
      },
      set: function(newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  },
  methods: {
  },
})