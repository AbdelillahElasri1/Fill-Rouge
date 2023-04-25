<script setup>
	  import headerdashboard from '../../components/dashboard/header.vue'
    import sidebardashboard from '../../components/dashboard/sidebar.vue'
    import statistics from '../../components/dashboard/statistics.vue'
    import clientTable from '../../components/dashboard/clientTable.vue'
    import socialtraffic from '../../components/dashboard/socialTraffic.vue'
    import recentactivite from '../../components/dashboard/recentActivite.vue'
    import '@/assets/sharingan.css'
</script>
  
<template>
	<!-- dashboard start -->
		
<div x-data="setup()" :class="{ 'dark': isDark }">
    <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
      <!-- header start -->
      <headerdashboard />
      <!-- header end -->
      <!-- Sidebar -->
          <sidebardashboard />
      <!-- ./Sidebar -->
    
      <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
    
        <!-- Statistics Cards -->
            <statistics />
        <!-- ./Statistics Cards -->
    
        <div class="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
    
          <!-- Social Traffic -->
            <!-- <socialtraffic /> -->
          <!-- ./Social Traffic -->
    
          <!-- Recent Activities -->
            <!-- <recentactivite /> -->
          <!-- ./Recent Activities -->
        </div>
      
    
        <!-- Client Table -->
          <!-- <clientTable /> -->
          <div class="flex justify-center items-center">
            <div class="">
              <div class="container">
    
                <div id="eye">
                <!--the whites of the eye + eyelash-->
                <div id="sharingan">
                  <!--the sharingan eye-->
                  <div id="black-outline"> <!--black sharingan border-->
                    <div class="tomoe-circle-1">  
                      <div class="triangle-1"></div>  <!--tomoe 1 -->
                    </div>
                    <div class="tomoe-circle-2">  <!--tomoe 2-->
                      <div class="triangle-2"></div>
                    </div>
                    <div class="tomoe-circle-3">  <!--tomoe 3 -->
                      <div class="triangle-3"></div>
                    </div>
                    <div class="pupil">   <!--pupil -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-center items-center">
              <!-- <svg class="w-60 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0H24V24H0z"/> <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 1c1.018 0 1.985.217 2.858.608L13.295 7.17C12.882 7.06 12.448 7 12 7c-2.761 0-5 2.239-5 5 0 1.38.56 2.63 1.464 3.536L7.05 16.95l-.156-.161C5.72 15.537 5 13.852 5 12c0-3.866 3.134-7 7-7zm6.392 4.143c.39.872.608 1.84.608 2.857 0 1.933-.784 3.683-2.05 4.95l-1.414-1.414C16.44 14.63 17 13.38 17 12c0-.448-.059-.882-.17-1.295l1.562-1.562zm-2.15-2.8l1.415 1.414-3.724 3.726c.044.165.067.338.067.517 0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2c.179 0 .352.023.517.067l3.726-3.724z"/> </g> </svg> -->
              <h1 class="text-5xl p-4 text-center font-bold from-blue-600 via-blue-400 to-blue-900 bg-gradient-to-r bg-clip-text text-transparent">Welcome Elasri </h1>
              <!-- <svg class="w-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0H24V24H0z"/> <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 1c1.018 0 1.985.217 2.858.608L13.295 7.17C12.882 7.06 12.448 7 12 7c-2.761 0-5 2.239-5 5 0 1.38.56 2.63 1.464 3.536L7.05 16.95l-.156-.161C5.72 15.537 5 13.852 5 12c0-3.866 3.134-7 7-7zm6.392 4.143c.39.872.608 1.84.608 2.857 0 1.933-.784 3.683-2.05 4.95l-1.414-1.414C16.44 14.63 17 13.38 17 12c0-.448-.059-.882-.17-1.295l1.562-1.562zm-2.15-2.8l1.415 1.414-3.724 3.726c.044.165.067.338.067.517 0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2c.179 0 .352.023.517.067l3.726-3.724z"/> </g> </svg> -->
            </div>
            <div>
              <div class="container">
    
                <div id="eye">
                <!--the whites of the eye + eyelash-->
                <div id="sharingan">
                  <!--the sharingan eye-->
                  <div id="black-outline"> <!--black sharingan border-->
                    <div class="tomoe-circle-1">  
                      <div class="triangle-1"></div>  <!--tomoe 1 -->
                    </div>
                    <div class="tomoe-circle-2">  <!--tomoe 2-->
                      <div class="triangle-2"></div>
                    </div>
                    <div class="tomoe-circle-3">  <!--tomoe 3 -->
                      <div class="triangle-3"></div>
                    </div>
                    <div class="pupil">   <!--pupil -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <!-- ./Client Table -->
    
            </div>
    </div>
  </div>    

  
	<!-- dashboard end -->
</template>