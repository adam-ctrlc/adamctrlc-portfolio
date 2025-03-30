<template>
  <div class="sticky top-0 bg-white z-10 py-4">
    <div class="max-w-3xl sm:max-w-6xl mx-auto px-4">
      <header
        class="flex justify-between items-center"
        aria-label="Main Navigation"
      >
        <div>
          <a
            href="#"
            class="text-xl font-bold text-gray-800"
            aria-label="Home"
            @click.prevent="scrollToTop"
          >
            <span>J</span><span class="text-emerald-600">A</span>
          </a>
        </div>
        <!-- Desktop Navigation -->
        <nav
          class="hidden sm:flex flex-row gap-6"
          aria-label="Primary Navigation"
        >
          <a
            href="#header"
            class="text-gray-600 hover:text-emerald-600"
            aria-label="Landing"
            @click.prevent="scrollToSection('#header')"
            >Landing</a
          >
          <a
            href="#about-me"
            class="text-gray-600 hover:text-emerald-600"
            aria-label="About"
            @click.prevent="scrollToSection('#about-me')"
            >About</a
          >
          <a
            href="#technical-skills"
            class="text-gray-600 hover:text-emerald-600"
            aria-label="Skills"
            @click.prevent="scrollToSection('#technical-skills')"
            >Skills</a
          >
          <a
            href="#recent-projects"
            class="text-gray-600 hover:text-emerald-600"
            aria-label="Projects"
            @click.prevent="scrollToSection('#recent-projects')"
            >Projects</a
          >
          <a
            href="#collaborations"
            class="text-gray-600 hover:text-emerald-600"
            aria-label="Collaborations"
            @click.prevent="scrollToSection('#collaborations')"
            >Collaborations</a
          >
          <a
            href="#get-in-touch"
            class="text-gray-600 hover:text-emerald-600"
            aria-label="Contact"
            @click.prevent="scrollToSection('#get-in-touch')"
            >Contact</a
          >
        </nav>
        <!-- Mobile Area -->
        <div class="sm:hidden">
          <!-- Mobile Menu Button -->
          <button
            id="mobile-menu-button"
            class="relative z-50 text-gray-600 focus:outline-none"
            aria-label="Toggle Mobile Menu"
            :aria-expanded="isMobileMenuOpen.toString()"
            @click="toggleMobileMenu"
          >
            <span v-if="!isMobileMenuOpen" class="text-md">&#9776;</span>
          </button>

          <!-- Mobile Navigation Overlay/Modal -->
          <transition name="fade">
            <div
              v-if="isMobileMenuOpen"
              @click.self="closeMobileMenu"
              class="fixed inset-0 bg-transparent z-40 flex justify-end"
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-nav-title"
            >
              <transition name="slide-in">
                <nav
                  v-if="isMobileMenuOpen"
                  id="mobile-nav"
                  class="w-64 h-full bg-white border-l border-gray-200 shadow-lg flex flex-col"
                  aria-label="Mobile Navigation"
                  ref="mobileNavRef"
                  @click.stop
                >
                  <div
                    class="p-4 border-b border-gray-200 flex justify-between items-center"
                  >
                    <h2 id="mobile-nav-title" class="font-semibold">Menu</h2>
                    <button
                      @click="closeMobileMenu"
                      class="text-gray-500 hover:text-emerald-600 p-1 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      aria-label="Close Menu"
                    >
                      <X :size="24" />
                    </button>
                  </div>
                  <div class="py-2 flex-1 overflow-y-auto">
                    <a
                      href="#header"
                      class="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 outline-none focus:outline-none"
                      aria-label="Landing"
                      @click="handleMobileLinkClick('#header')"
                      >Landing</a
                    >
                    <a
                      href="#about-me"
                      class="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                      aria-label="About"
                      @click="handleMobileLinkClick('#about-me')"
                      >About</a
                    >
                    <a
                      href="#technical-skills"
                      class="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                      aria-label="Skills"
                      @click="handleMobileLinkClick('#technical-skills')"
                      >Skills</a
                    >
                    <a
                      href="#recent-projects"
                      class="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                      aria-label="Projects"
                      @click="handleMobileLinkClick('#recent-projects')"
                      >Projects</a
                    >
                    <a
                      href="#collaborations"
                      class="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                      aria-label="Collaborations"
                      @click="handleMobileLinkClick('#collaborations')"
                      >Collaborations</a
                    >
                    <a
                      href="#get-in-touch"
                      class="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                      aria-label="Contact"
                      @click="handleMobileLinkClick('#get-in-touch')"
                      >Contact</a
                    >
                  </div>
                </nav>
              </transition>
            </div>
          </transition>
        </div>
      </header>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue';
import { X } from 'lucide-vue-next';

const isMobileMenuOpen = ref(false);
const mobileNavRef = ref(null);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  console.log('Mobile menu toggled. Is open:', isMobileMenuOpen.value);
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const scrollToSection = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    const headerHeight =
      document.querySelector('.sticky.top-0')?.offsetHeight || 0;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleMobileLinkClick = (selector) => {
  closeMobileMenu();
  nextTick(() => {
    setTimeout(() => {
      scrollToSection(selector);
    }, 50);
  });
};

watch(isMobileMenuOpen, (isOpen) => {
  const body = document.body;
  if (isOpen) {
    body.style.overflow = 'hidden';
    nextTick(() => {
      mobileNavRef.value?.focus();
    });
  } else {
    body.style.overflow = '';
    document.getElementById('mobile-menu-button')?.focus();
  }
});

onMounted(() => {
  return () => {
    document.body.style.overflow = '';
  };
});

onBeforeUnmount(() => {
  document.body.style.overflow = '';
});
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

/* Remove custom focus style for links */
a:focus {
  outline: none;
  box-shadow: none;
}

/* Keep general custom focus style for buttons */
button:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 2px var(--emerald-600, #059669);
}

/* Specifically remove focus style for the mobile menu toggle button */
#mobile-menu-button:focus {
  outline: none;
  box-shadow: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-in-enter-active,
.slide-in-leave-active {
  transition: transform 0.3s ease-out;
}

.slide-in-enter-from,
.slide-in-leave-to {
  transform: translateX(100%);
}
</style>
