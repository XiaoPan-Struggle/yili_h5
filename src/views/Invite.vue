<template>
  <!-- 邀请好友 -->
  <div class="container invite">
    <main class="main">
      <p class="inviteSum">邀请 <i>5</i> 名好友即可再获得一次抽奖机会</p>
      <p class="inviteRule">邀请越多机会越多</p>
      <div class="inviteBuddy">
        <ul class="inviteList">
          <li v-for="item in peoples" :key="item">
            <div class="logo">
              <img src="https://img01.yzcdn.cn/upload_files/2021/03/23/FrWrkBwyTEutMtyvbqq262mhsxHQ.png" alt="">
            </div>
            <div class="username">好友{{item}}</div>
          </li>
          <li>
            <div class="logo toBeInvited">
              <img src="https://img01.yzcdn.cn/upload_files/2021/03/23/FrWrkBwyTEutMtyvbqq262mhsxHQ.png" alt="">
            </div>
            <div class="username">待邀请</div>
          </li>
        </ul>
      </div>
      <button class="inviteBtn">邀请好友</button>
      <div class="drawAgain">再来一次，冲击大奖！</div>
      <div class="countdown">
        倒计时
        <div class="time">72</div>:
        <div class="time">23</div>:
        <div class="time">5</div>
      </div>
    </main>
    <div class="boostTotal">
      <p>共有 {{items && items.length}} 位好友帮你助力</p>
    </div>
    <div class="boostPeople">
      <ol>
        <li class="peoplesItem" v-for="item in items" :key="item">
          <div class="inviteAvatar">
            <img src="https://img01.yzcdn.cn/upload_files/2021/03/23/FrWrkBwyTEutMtyvbqq262mhsxHQ.png" alt="">
          </div>
          <div class="inviteInfo" >
            <div class="infoData">
              <div class="userName">娜娜{{item}}</div>
              <div class="inviteDate">2021-3-12</div>
            </div>
            <div class="inviteStatus">已助力</div>
          </div>
        </li>
      </ol>
    </div>
    <button class="attention">点击关注 <i class="wechat">”植选植物奶”</i> 微信公众号</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Invite',
  data(){
    return{
      items:['1','2','3','4','5','6','7','8'],
      peoples: ['1','2','3','4']
    }
  }
};
</script>

<style lang="scss" scoped>
button:focus{
  outline: none;
}
i{
  font-style: normal;
}
.invite {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url("https://img01.yzcdn.cn/upload_files/2021/03/22/Fv9Xk7LgvXr_DRimJC8oDsBOa1bf.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: #d6f1ee;
  > .main{
    width: 690rem;
    margin-top: 428rem;
    padding: 50rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 16rem;
    .inviteSum{
      width: 572rem;
      font-size: 32rem;
      padding: 4rem 0;
      i{
        font-size: 40rem;
        color: #0b6632;
      }
    }
    .inviteRule{
      padding: 0 8rem;
      margin: 24rem 0 70rem 0;
      font-size: 28rem;
      color: #656565;
    }
    .inviteBuddy{
      width: 594rem;
      color: #999;
      .inviteList{
        display: flex;
        justify-content: space-between;
        //flex-wrap: wrap; // 能超过5个用这个样式
        li{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          //width: 20%; // 能超过5个用这个样式
          .toBeInvited{
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2rem dashed #d8d8d8;
            img{
              width: 30rem;
              height: 30rem;
            }
          }
        }
      }
      .inviteList .logo{
        width: 80rem;
        height: 80rem;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 2rem;
      }
    }
    .inviteBtn{
      width: 524rem;
      margin: 40rem 0 22rem 0;
      padding: 18rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 36rem;
      border: none;
      color: #fff;
      background-image: url("https://img01.yzcdn.cn/upload_files/2021/03/22/FlMVsFRMYcmarp_ZBMm8-tEiwIsr.png");
      background-size: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-color: #fff;
    }
    .drawAgain{
      width: 260rem;
      margin-bottom: 32rem;
      line-height: 40rem;
      color: #0e7a3b;
      font-size: 24rem;
      text-align: center;
      cursor: pointer;
      pointer-events: none;
    }
    .countdown{
      width: 316rem;
      font-size: 28rem;
      color: #656565;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .time{
        width: 48rem;
        height: 48rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #d8d8d8;
      }
    }
  }
  .boostTotal{
    width: 674rem;
    margin-top: 50rem;
    line-height: 54rem;
    font-size: 32rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
      width: 332rem;
      height: 100%;
      display: flex;
      align-items: center;
    }
    &::before,&:after{
      content: '';
      display: block;
      width: 162rem;
      height: 2rem;
      background: linear-gradient(90deg, #0028B070, #0E7A3B);
    }
    &::after{
      transform: scaleX(-1);
    }
  }
  .boostPeople{
    width: 644rem;
    margin: 28rem 0 40rem 0;
    > ol{
    }
    .peoplesItem{
      display: flex;
      justify-content: space-between;
      margin-bottom: 24rem;
      &:last-child{
        margin-bottom: 0;
      }
      > .inviteInfo{
        width: 548rem;
        display: flex;
        justify-content: space-between;
        > .infoData{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          font-size: 20rem;
        }
        >.inviteStatus{
          font-size: 24rem;
        }
      }
      > .inviteAvatar{
        width: 72rem;
        height: 72rem;
        border-radius: 50%;
        overflow: hidden;
      }
    }
  }
  .attention{
    width: 604rem;
    height: 84rem;
    margin-bottom: 56rem;
    background: url("https://img01.yzcdn.cn/upload_files/2021/03/23/FjGIO_SNteN1nT4SPVhTWWL-DFSO.png") center -6rem no-repeat;
    background-size: 100%;
    font-size: 32rem;
    color: #fff;
    .wechat{
      font-size: 36rem;
    }
  }
}
</style>