<script setup>

</script>

<template>
  <!-- search bar -->
  <main>
    <div class="flex justify-center gap-24 mt-6">
      <div class="relative text-gray-600">
        <input type="search" name="serch" placeholder="Search" class="bg-gray-200 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none">
        <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
          <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
          </svg>
        </button>
      </div>
      <div class="relative inline-flex">
        <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
        <select class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
          <option>Any Price</option>
          <option>$120000</option>
          <option>$240000</option>
          <option>$330000</option>
          <option>$460000</option>
          <option>$500000</option>
          <option>$580000</option>
          <option>$610000</option>
          <option>$780000</option>
        </select>
      </div>
      <div class="relative inline-flex">
        <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
        <select class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
          <option>All Beds</option>
          <option>Red</option>
          <option>Blue</option>
          <option>Yellow</option>
          <option>Black</option>
          <option>Orange</option>
          <option>Purple</option>
          <option>Gray</option>
          <option>White</option>
        </select>
      </div>
      <div class="relative inline-flex">
        <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
          <select class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
            <option>Sort : Just For You</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Black</option>
            <option>Orange</option>
            <option>Purple</option>
            <option>Gray</option>
            <option>White</option>
          </select>
      </div>
      <div>
          <button type="submit" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Save Search</button>
      </div>
  </div>
  <!-- list home bar -->
  <div class="flex justify-between">     
    <div class="flex gap-6 flex-wrap text-left bg-gray-100 justify-center m-8 p-4 w-2/3">
      <!-- card 1 -->
        <div class="w-[250px] h-[300px]">
          <div>
            <img src="https://github.com/kenvantruong/real-estate/blob/master/img-houses/8.png?raw=true" class="w-[250px] h-[200px]" alt="">
          </div>
          <div>
            <strong class="pl-4">$220000</strong>
          </div>
          <div>
            <p class="pl-4">titre</p>
          </div>
          <div>
            <p class="pl-4">600 Silliman St San Francisco, CA 94134</p>
          </div>
        </div>
        <!-- card 1 -->
        <div class="w-[250px] h-[300px]">
          <div>
            <img src="https://github.com/kenvantruong/real-estate/blob/master/img-houses/7.png?raw=true" class="w-[250px] h-[200px]" alt="">
          </div>
          <div>
            <strong class="pl-4">$220000</strong>
          </div>
          <div>
            <p class="pl-4">titre</p>
          </div>
          <div>
            <p class="pl-4">600 Silliman St San Francisco, CA 94134</p>
          </div>
        </div>
        <!-- card 1 -->
        <div class="w-[250px] h-[300px]">
          <div>
            <img src="https://github.com/kenvantruong/real-estate/blob/master/img-houses/6.png?raw=true" class="w-[250px] h-[200px]" alt="">
          </div>
          <div>
            <strong class="pl-4">$220000</strong>
          </div>
          <div>
            <p class="pl-4">titre</p>
          </div>
          <div>
            <p class="pl-4">600 Silliman St San Francisco, CA 94134</p>
          </div>
        </div>
        <!-- card 1 -->
        <div class="w-[250px] h-[300px]">
          <div>
            <img src="https://github.com/kenvantruong/real-estate/blob/master/img-houses/2.png?raw=true" class="w-[250px] h-[200px]" alt="">
          </div>
          <div>
            <strong class="pl-4">$220000</strong>
          </div>
          <div>
            <p class="pl-4">titre</p>
          </div>
          <div>
            <p class="pl-4">600 Silliman St San Francisco, CA 94134</p>
          </div>
        </div>
        <!-- card 1 -->
        <div class="w-[250px] h-[300px]">
          <div>
            <img src="https://github.com/kenvantruong/real-estate/blob/master/img-houses/4.png?raw=true" class="w-[250px] h-[200px]" alt="">
          </div>
          <div>
            <strong class="pl-4">$220000</strong>
          </div>
          <div>
            <p class="pl-4">titre</p>
          </div>
          <div>
            <p class="pl-4">600 Silliman St San Francisco, CA 94134</p>
          </div>
        </div>
        <!-- card 1 -->
        <div class="w-[250px] h-[300px]">
          <div>
            <img src="https://github.com/kenvantruong/real-estate/blob/master/img-houses/1.png?raw=true" class="w-[250px] h-[200px]" alt="">
          </div>
          <div>
            <strong class="pl-4">$220000</strong>
          </div>
          <div>
            <p class="pl-4">titre</p>
          </div>
          <div>
            <p class="pl-4">600 Silliman St San Francisco, CA 94134</p>
          </div>
        </div>
        <!-- card 1 -->
        <div class="w-[250px] h-[300px]">
          <div>
            <img src="https://github.com/kenvantruong/real-estate/blob/master/img-houses/8.png?raw=true " class="w-[250px] h-[200px]" alt="">
          </div>
          <div>
            <strong class="pl-4">$220000</strong>
          </div>
          <div>
            <p class="pl-4">titre</p>
          </div>
          <div>
            <p class="pl-4">600 Silliman St San Francisco, CA 94134</p>
          </div>
        </div>
        <!-- card 1 -->
        <div class="w-[250px] h-[300px]">
          <div>
            <img src="https://github.com/kenvantruong/real-estate/blob/master/img-houses/5.png?raw=true " class="w-[250px] h-[200px]" alt="">
          </div>
          <div>
            <strong class="pl-4">$220000</strong>
          </div>
          <div>
            <p class="pl-4">titre</p>
          </div>
          <div>
            <p class="pl-4">600 Silliman St San Francisco, CA 94134</p>
          </div>
        </div>
        <!-- pagination start -->

        <nav aria-label="Page navigation example" class="flex justify-center mb-6">
          <ul class="inline-flex -space-x-px">
            <li>
              <a href="#" class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>
            <li>
              <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
              <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
              <a href="#" aria-current="page" class="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
            </li>
            <li>
              <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
            </li>
            <li>
              <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
            </li>
            <li>
              <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
            </li>
          </ul>
        </nav>
    </div>
    <div class="relative w-1/2  h-[900px] ">
      <iframe class="absolute top-0 left-0 w-full h-full "
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
          frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
      </iframe>
  </div>
</div>








 
  </main>
  
</template>
