<template>
  <el-row>
    <el-col :span="8" style="padding-right: 10px;">
        <el-card class="box-card">
            <div class="user">
                <img src="../assets/images/user.jpg" alt="">
                <div class="userinfo">
                    <p class="name">Admin</p>
                    <p class="access">超级管理员</p>
                </div>
            </div>
            <div class="login-info">
              <p>上次登录时间：<span>2023-3-31</span></p>
              <p>上次登录地点：<span>珠海</span></p>
            </div>
        </el-card>
        <el-card style="margin-top: 20px;height: 465px;">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="name"
              label="课程">
            </el-table-column>
            <el-table-column
              prop="todayBuy"
              label="今日购买">
            </el-table-column>
            <el-table-column
              prop="monthBuy"
              label="本月购买">
            </el-table-column>
            <el-table-column
              prop="totalBuy"
              label="总购买">
            </el-table-column>
            <!-- <el-table-column v-for="(val,key) in tableLable" :prop="key" :label="val"> </el-table-column> -->
          </el-table>
        </el-card>
    </el-col>

    <el-col :span="16" style="padding-left: 10px;">
        <div class="num">
            <el-card v-for="item in countData" :key="item.name" :body-style="{display:'flex', padding:'0'}">
                  <i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}"></i>
                  <div class="detail">
                    <p class="price"> ${{ item.value }}</p>
                    <p class="desc">{{ item.name }}</p>
                  </div>
            </el-card>
        </div>
         <el-card style="height: 280px">
          <!-- 折线图 -->

         </el-card >
         <div class="graph">
             <el-card></el-card>
             <el-card></el-card>
         </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      tableData:[
        {
          name:'opop',
          todayBuy:100,
          monthBuy:300,
          totalBuy:800,
        },
        {
          name:'vivo',
          todayBuy:100,
          monthBuy:300,
          totalBuy:800,
        },
        {
          name:'苹果',
          todayBuy:100,
          monthBuy:300,
          totalBuy:800,
        },
        {
          name:'小米',
          todayBuy:100,
          monthBuy:300,
          totalBuy:800,
        },
        {
          name:'三星',
          todayBuy:100,
          monthBuy:300,
          totalBuy:800,
        },
        {
          name:'魅族',
          todayBuy:100,
          monthBuy:300,
          totalBuy:800,
        },
      ],
      tableLable:{
        name:'课程',
        todayBuy:'今日购买',
        monthBuy:'本月购买',
        totalBuy:'总购买',
      },
      countData:[
        {
          name:"今日支付订单",
          value:1234,
          icon: "success",
          color:"#2ec7c9",
        },
        {
          name:"今日收藏订单",
          value:210,
          icon: "star-on",
          color:"#ffb980",
        },
        {
          name:"今日未支付订单",
          value:1234,
          icon: "s-goods",
          color:"#5ab1ef",
        },
        {
          name:"本月支付订单",
          value:1234,
          icon: "success",
          color:"#2ec7c9",
        },
        {
          name:"本月收藏订单",
          value:210,
          icon: "star-on",
          color:"#ffb980",
        },
        {
          name:"本月未支付订单",
          value:1234,
          icon: "s-goods",
          color:"#5ab1ef",
        },
      ]
    };
  },
};
</script>

<style lang="less" scoped>
    .user {
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid #ccc;
        display: flex;
        align-items: center;
        img {
          width: 130px;
          height: 150px; 
          border-radius: 50%;
          margin-right: 40px;
        }
        .userinfo {
          .name{
            font-size: 32px;
            margin-bottom: 10px;
          }
          .access {
            color: #999;
          }
        }
    }
    .login-info{
          p {
            line-height: 28px;
            font-size: 14px;
            color: #999;
            span{
              color: #666;
              margin-left: 60px;
            }
          }
    }
    .num{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .icon{
          width: 80px;
          height: 80px;
          line-height: 80px;
          font-size: 30px;
          text-align: center;
          color: #fff;
        }
        .detail{
          margin-left: 15px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .price{
            font-size: 30px;
            margin-bottom: 10px ;
            line-height: 30px;
            height: 30px;
          }
          .desc {
            font-size: 14px;
            color: #999;
            text-align: center;
          }
        }
        .el-card{
          width: 30%;
          margin-bottom: 20px;
        }
    }
    .graph{
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      .el-card{
        width: 48%;
        height: 265px
      }
    }
    

</style>