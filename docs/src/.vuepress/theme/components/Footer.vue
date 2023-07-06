<template>
  <div class="footer-wrapper">
    <p class="sponsors">
      <a href="https://www.fudan.edu.cn/en/" target="_blank"><img src="/fudan_logo.svg"></a>
      <a href="https://iobs.fudan.edu.cn/iobsenglish/"><img src="iobs_logo.png"></a>
    </p>
    <span v-if="$themeConfig.record">
      <reco-icon icon="reco-beian" />
      <a :href="$themeConfig.recordLink || '#'">{{ $themeConfig.record }}</a>
    </span>
    <span>
      <reco-icon icon="iconfont icon-copyright" />
      <p>
        2022 - Content on this site is licensed under a MIT license.
      </p>
    </span>
    <span v-show="showAccessNumber">
      <reco-icon icon="reco-eye" />
      <AccessNumber idVal="/" />
    </span>
    <p>
      The repository used to create this website is available at
      <a href="https://github.com/MistyField/ANPBD2023" target="_blank">github.com/MistyField/ANPBD2023</a>
      . This page was designed and created by <a href="mailto:20301050198@fudan.edu.cn">Zhiyue Chen</a>
    </p>
    <Comments :isShowComments="false"/>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { RecoIcon } from '@vuepress-reco/core/lib/components'
import { version } from '../package.json'
import { useInstance } from '@theme/helpers/composable'

export default defineComponent({
  components: { RecoIcon },
  setup (props, ctx) {
    const instance = useInstance()
    const showAccessNumber = computed(() => {
      const valineConfig = instance?.$themeConfig?.valineConfig
      const valineLocalConfig = instance?.$themeLocaleConfig?.valineConfig

      const vc = valineLocalConfig || valineConfig

      return vc && vc.visitor != false
    })
    return { version, showAccessNumber }
  }
})
</script>

<style lang="stylus" scoped>
  .footer-wrapper {
    border-top: 1px solid var(--border-color);
    background-color: gray;
    color: lighten($textColor, 25%);
    .sponsors{
      margin-top: 1rem;
    }
    a {
      font-size 14px
    }
    > p{
      margin-left 1rem
      margin-top 0
      >a{
      >img{
      max-height 5rem
      }
    }
    }
    > span {
      margin-left 1rem
      display flex
      align-items baseline
      > i {
        margin-right .5rem
      }
    }
    .cyber-security {
      img {
        margin-right .5rem
        width 20px
        height 20px
        vertical-align middle
      }
      a {
        vertical-align middle
      }
    }
  }

@media (max-width: $MQMobile) {
  .footer {
    text-align: left!important;
    > span {
      display flex
      align-items baseline
      margin-left 0
      line-height 2rem
    }
  }
}
</style>
