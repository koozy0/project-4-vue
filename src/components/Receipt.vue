<template>
  <div class="receipt">
    <div class="backgroundStyle">
      <h1>Receipt</h1>
      <tr>
        <th>Qty</th>
        <th>Item</th>
        <th>Unit Price</th>
      </tr>
      <tr v-for="item in receipt">
        <td>{{item.quantity}}</td>
        <td>{{item.item}}</td>
        <td>{{item.price}}</td>
      </tr>
      <tr>
        <th></th>
        <th>Sub-Total: </th>
        <td v-if="subTotal !== 0">${{ subTotal }}</td>
      </tr>
      <tr>
        <th></th>
        <th>Service Charge: </th>
        <td v-if="subTotal !== 0">${{ svcChg }}</td>
      </tr>
      <tr>
        <th></th>
        <th>GST: </th>
        <td v-if="subTotal !== 0">${{ gst }}</td>
      </tr>
      <tr v-if="rounding !== 0">
        <th></th>
        <th>Rounding: </th>
        <td>- ${{ rounding }}</td>
      </tr>
      <tr>
        <th></th>
        <th>Total: </th>
        <td>${{ total }}</td>
      </tr>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'receipt',
    props: ['initialReceipt'],
    data () {
      return {
        receipt: this.initialReceipt,
        subTotal: 0,
        svcChg: 0,
        gst: 0,
        rounding: 0,
        total: 0
      }
    },
    methods: {
      getSubTotal: function () {
        const receipt = this.receipt
        let subTotal = 0

        receipt.forEach(item => {
          let unitPrice = item.price.replace('$', '')
          unitPrice = parseFloat(unitPrice)
          subTotal += item.quantity * unitPrice
        })
        this.subTotal = subTotal.toFixed(2)
      },
      getSvcChg: function () {
        this.svcChg = (this.subTotal * 0.10).toFixed(2)
      },
      getGst: function () {
        if (this.svcChg !== 0) {
          let subTotal = parseFloat(this.subTotal)
          let svcChg = parseFloat(this.svcChg)
          this.gst = ((subTotal + svcChg) * 0.07).toFixed(2)
        }
        else this.gst = (this.subTotal * 0.07).toFixed(2)
      },
      getTotal: function () {
        let subTotal = parseFloat(this.subTotal)
        let svcChg = parseFloat(this.svcChg)
        let gst = parseFloat(this.gst)
        this.total += Math.round((subTotal + svcChg + gst) * 10) / 10
        this.total = this.total.toFixed(2)
      },
      getRounding: function () {
        let subTotal = parseFloat(this.subTotal)
        let svcChg = parseFloat(this.svcChg)
        let gst = parseFloat(this.gst)
        let total = parseFloat(this.total)
        let rounding = (subTotal + gst + svcChg) - total

        if (rounding !== 0) this.rounding = rounding.toFixed(2)
      }
    },
    mounted () {
      this.getSubTotal()
      this.getSvcChg()
      this.getGst()
      this.getTotal()
      this.getRounding()
    }
  }
</script>

<style scoped>

</style>
