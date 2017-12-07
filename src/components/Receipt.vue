<template>
  <div class="receipt">
    <md-card class="md-flex-50 md-flex-small-100 backgroundStyle">
      <h1 class="md-title">Receipt</h1>
      <div v-if="initialReceipt !== undefined">
        <table>
          <tr>
            <th>Selected</th>
            <th>Qty</th>
            <th>Item</th>
            <th>Unit Price</th>
          </tr>
          <tr v-for="item in receipt">
            <td><input type="checkbox"
              v-model="checkedItems"
              v-bind:value="item">
            </td>
            <td>{{item.quantity}}</td>
            <td>{{item.item}}</td>
            <td>{{item.price}}</td>
          </tr>
          <tr style="border-top:1px solid black;" v-if="subTotal !== 0">
            <th></th>
            <th></th>
            <th>Sub-Total: </th>
            <th>${{ subTotal }}</th>
          </tr>
          <tr>
            <th><input type="checkbox"
              v-model="calcSvcChg"
              value="true"></th>
            <th></th>
            <th>10% Service Charge: </th>
            <td>${{ svcChg }}</td>
          </tr>
          <tr>
            <th><input type="checkbox"
              v-model="calcGst"
              value="true"></th>
            <th></th>
            <th>7% GST: </th>
            <td>${{ gst }}</td>
          </tr>
          <tr v-if="rounding !== 0">
            <th></th>
            <th></th>
            <th>Rounding: </th>
            <td>( ${{ rounding }} )</td>
          </tr>
          <tr style="border-top:1px solid black;border-bottom:4px double black;">
            <th></th>
            <th></th>
            <th>Total: </th>
            <th>${{ total }}</th>
          </tr>
        </table>
        <br>
        <md-button
          v-on:click="getSubTotal"
          class="md-primary buttonStyle">
          Calculate
        </md-button>
      </div>
      <h3 v-else>Please scan a receipt</h3>
      <br>
    </md-card>
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
        total: 0,
        checkedItems: [],
        calcSvcChg: false,
        calcGst: false
      }
    },
    methods: {
      getSubTotal: function () {
        let items = this.checkedItems.length === 0 ? this.receipt : this.checkedItems
        let subTotal = 0

        items.forEach(item => {
          let unitPrice = item.price.replace('$', '')
          unitPrice = parseFloat(unitPrice)
          subTotal += item.quantity * unitPrice
        })
        this.subTotal = subTotal.toFixed(2)

        if (this.calcSvcChg) this.getSvcChg()
        else this.svcChg = 0
        if (this.calcGst) this.getGst()
        else this.gst = 0
        this.getTotal()
        this.getRounding()
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
        this.total = 0
        let subTotal = parseFloat(this.subTotal)
        let svcChg = parseFloat(this.svcChg)
        let gst = parseFloat(this.gst)
        let total = Math.round((subTotal + svcChg + gst) * 10) / 10
        total = total.toFixed(2)
        this.total = total
      },
      getRounding: function () {
        this.rounding = 0
        let subTotal = parseFloat(this.subTotal)
        let svcChg = parseFloat(this.svcChg)
        let gst = parseFloat(this.gst)
        let total = parseFloat(this.total)
        let rounding = (subTotal + gst + svcChg) - total

        if (rounding !== 0) this.rounding = rounding.toFixed(2)
      }
    },
    mounted () {
      if (this.receipt !== undefined) {
        this.getSubTotal()
        this.getSvcChg()
        this.getGst()
        this.getTotal()
        this.getRounding()
      }
    }
  }
</script>

<style scoped>
.receipt {
  display: flex;
  flex-direction: column;
  align-items: center;
}
table {
    border-collapse: collapse;
}
th, td {
  text-align: left;
  padding: 10px;
  font-size: 20px;
}

md-card {
  padding: 16px 16px 24px 16px;
}
</style>
