<template>
  <div>
    <x-header>提现历史</x-header>
    <div class="total_money">
      累计已打款：0元
    </div>
    <x-table :cell-bordered="false" style="background-color:#fff; margin-top:10px; color:#5e5e5e;">
      <thead>
        <tr style="background-color: #fd7651; color:#fff;">
          <th>申请日期</th>
          <th>金额</th>
          <th>状态</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>2017/01/29</td>
        <td>1000.00</td>
        <td><badge text="已到账" style="background-color:forestgreen;"></badge></td>
      </tr>
      <tr>
        <td>2017/01/29</td>
        <td>1000.00</td>
        <td><badge text="未到账" style="background-color:orange;"></badge></td>
      </tr>
      <tr>
        <td>2017/01/29</td>
        <td>1000.00</td>
        <td><badge text="失败" style="background-color:crimson;"></badge></td>
      </tr>
      </tbody>
    </x-table>
  </div>
</template>

<script>
  import { XHeader, XTable, Badge } from 'vux'
  export default {
    name: 'withdrawal',
    components: {
      XHeader,
      XTable,
      Badge
    }
  }
</script>

<style scoped lang="less">
  .total_money {
    padding:10px;
    background-color: #fff;
    color:#5e5e5e;
    text-align: right;
    font-weight: bold;
  }

</style>
