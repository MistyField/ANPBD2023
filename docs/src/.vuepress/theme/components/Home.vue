<template>
  <div class="home">
    <div class="hero" :style="bgImageStyle">
      <ModuleTransition delay="0.04">
        <h1
          v-if="recoShowModule && $frontmatter.heroText !== null">
          {{ $frontmatter.heroText || $title || 'vuePress-theme-reco' }}
        </h1>
      </ModuleTransition>
      <ModuleTransition delay="0.08">
        <p v-if="recoShowModule && $frontmatter.tagline !== null" class="description">
          {{ $frontmatter.tagline || $description || 'Welcome to your vuePress-theme-reco site' }}
        </p>
      </ModuleTransition>
      <ModuleTransition delay="0.16">
        <p class="action" v-if="recoShowModule && $frontmatter.actionText && $frontmatter.actionLink">
          <NavLink class="action-button" :item="actionLink"/>
        </p>
      </ModuleTransition>
    </div>

    <ModuleTransition delay="0.24">
      <div class="features" v-if="recoShowModule && $frontmatter.features && $frontmatter.features.length">
        <div v-for="(feature, index) in $frontmatter.features" :key="index" class="feature">
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.details }}</p>
        </div>
      </div>
    </ModuleTransition>
    <ModuleTransition delay="0.32">
      <Content class="home-center" v-show="recoShowModule" custom/>
    </ModuleTransition>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import NavLink from '@theme/components/NavLink'
import { ModuleTransition } from '@vuepress-reco/core/lib/components'
import { useInstance, useShowModule } from '@theme/helpers/composable'

export default defineComponent({
  components: { NavLink, ModuleTransition },

  setup (props, ctx) {
    const instance = useInstance()
    const recoShowModule = useShowModule()
    const actionLink = computed(() => instance && {
      link: instance.$frontmatter.actionLink,
      text: instance.$frontmatter.actionText
    })
    const bgImageStyle = computed(() => {
      const url = instance.$frontmatter.bgImage
          ? instance.$withBase(instance.$frontmatter.bgImage)
          : require("../images/bg.svg");

      const initBgImageStyle = {
        textAlign: "center",
        overflow: "hidden",
        background: `url(${url}) center/cover no-repeat`,
      };

      const { bgImageStyle } = instance.$frontmatter;

      return bgImageStyle
          ? { ...initBgImageStyle, ...bgImageStyle }
          : initBgImageStyle;
    });
    const heroImageStyle = computed(() => instance.$frontmatter.heroImageStyle || {
      maxHeight: '200px',
      margin: '6rem auto 1.5rem'
    })

    return { recoShowModule, actionLink, heroImageStyle,bgImageStyle }
  }
})
</script>

<style lang="stylus">
.home {
  padding: 0;
  margin: 0px auto;
  max-width: 100vw;
  p{
    overflow: auto;
  }
  .hero {
    position: relative;
    box-sizing: border-box;
    padding: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      margin-top: 0;
      display: block;
      font-size: 3.5rem;
      font-weight: 600;
      background-image: linear-gradient(to right,#5D67E8,#ef4444);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h1, .description, .action {
      margin: 1.8rem auto;
    }

    .description {
      font-size: 1.6rem;
      line-height: 1.3;
      font-weight: 600;
      background-image: linear-gradient(to right,#5D67E8,#ef4444);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: $accentColor;
      padding: 0.2rem 1.2rem;
      border-radius: $borderRadius;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      load-start()

      &:hover {
        background-color: lighten($accentColor, 10%);
      }
    }
  }

  .features {
    border-top: 1px solid var(--border-color);
    padding: 1.2rem 0;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
  }

  .feature {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;
    transition: all .5s;
    color: var(--text-color);
    h2 {
      font-size: 1.6rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
    }

    &:hover {
      transform scale(1.05)
    }
  }
}

@media (max-width: $MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
