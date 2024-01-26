<template>
  <div class="w-full">
    <div class="py-6 px-5 flex flex-col gap-2 bg-[#fffef4]">
      <h3 class="text-4xl font-medium text-secondary">Onboarding Requests</h3>
      <p class="text-base font-normal tracking-[0.15px] text-[#666662]">
        Review requests on the basis of client’s information and risk scores.
      </p>
    </div>

    <div class="px-2">
      <!-- Search / Filter -->
      <div class="my-4 flex gap-1">
        <div
          class="relative flex gap-[2px] basis-[95%] rounded-lg border border-secondary-light"
        >
          <SearchInput
            :preventClose="preventClose"
            :showDropDown="showSearchDropdown"
            @showSearchDropdownSetter="showSearchDropdownSetter"
          />
          <button
            @click="
              () => {
                console.log('Search mee');
              }
            "
            class="m-1 basis-[6%] flex px-4 py-[10px] justify-center items-center border rounded-lg bg-[#F1F1F1] border-secondary-light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M8.64844 16.6484C10.4234 16.6481 12.1472 16.0539 13.5454 14.9604L17.9414 19.3564L19.3554 17.9424L14.9594 13.5464C16.0534 12.1481 16.648 10.4239 16.6484 8.64844C16.6484 4.23744 13.0594 0.648438 8.64844 0.648438C4.23744 0.648438 0.648438 4.23744 0.648438 8.64844C0.648438 13.0594 4.23744 16.6484 8.64844 16.6484ZM8.64844 2.64844C11.9574 2.64844 14.6484 5.33944 14.6484 8.64844C14.6484 11.9574 11.9574 14.6484 8.64844 14.6484C5.33944 14.6484 2.64844 11.9574 2.64844 8.64844C2.64844 5.33944 5.33944 2.64844 8.64844 2.64844Z"
                fill="#212121"
              />
            </svg>
          </button>
        </div>
        <button
          @click="showFilterDropdownSetter"
          @click.stop="preventClose"
          ref="dropdown"
          class="flex px-4 py-[10px] justify-center items-center gap-2 border rounded-lg bg-white border-secondary-light"
        >
          <span class="text-sm font-semibold text-secondary">Filters</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M9.66667 15H11.3333C11.7917 15 12.1667 14.625 12.1667 14.1667C12.1667 13.7083 11.7917 13.3333 11.3333 13.3333H9.66667C9.20833 13.3333 8.83333 13.7083 8.83333 14.1667C8.83333 14.625 9.20833 15 9.66667 15ZM3 5.83333C3 6.29167 3.375 6.66667 3.83333 6.66667H17.1667C17.625 6.66667 18 6.29167 18 5.83333C18 5.375 17.625 5 17.1667 5H3.83333C3.375 5 3 5.375 3 5.83333ZM6.33333 10.8333H14.6667C15.125 10.8333 15.5 10.4583 15.5 10C15.5 9.54167 15.125 9.16667 14.6667 9.16667H6.33333C5.875 9.16667 5.5 9.54167 5.5 10C5.5 10.4583 5.875 10.8333 6.33333 10.8333Z"
              fill="#333333"
            />
          </svg>
        </button>
      </div>

      <!-- Filter Dropdown -->
      <div
        v-if="showFilterDropdown"
        @click.stop="preventClose"
        class="absolute min-w-[1185px] -mt-3 drop-shadow-2xl rounded z-10 bg-white"
      >
        <div
          class="flex gap-1 px-4 py-3 tracking-[0.15px] justify-between items-center"
        >
          <span class="font-medium text-black text-lg">Filters </span>
          <span class="text-xs font-normal italic text-secondary-semi-dark"
            >*Filters will auto-apply, you can go back and see results by simply
            clicking ’Filters’ option again.
          </span>
        </div>
        <div class="border-y px-3 h-fit">
          <div class="flex justify-between">
            <div class="p-2 flex flex-col gap-1">
              <span class="text-sm font-semibold text-secondary"
                >Ticket ID</span
              >
              <label class="py-2 px-1 flex items-center gap-2" for="checkbox">
                <input type="checkbox" />
                <span class="text-sm text-secondary font-normal">
                  Individual Account - IND
                </span>
              </label>
              <label class="py-2 px-1 flex items-center gap-2" for="checkbox">
                <input type="checkbox" />
                <span class="text-sm text-secondary font-normal">
                  Minor Account - MNR
                </span>
              </label>

              <label class="py-2 px-1 flex items-center gap-2" for="checkbox">
                <input type="checkbox" />
                <span class="text-sm text-secondary font-normal">
                  Joint Account - JNT
                </span>
              </label>
              <label class="py-2 px-1 flex items-center gap-2" for="checkbox">
                <input type="checkbox" />
                <span class="text-sm text-secondary font-normal">
                  Corporate Account - CORP
                </span>
              </label>
            </div>
            <div class="p-2 flex flex-col gap-1">
              <span class="text-sm font-semibold text-secondary">
                Liveness Check
              </span>
              <label class="py-2 px-1 flex items-center gap-2" for="checkbox">
                <input type="checkbox" />
                <span class="text-sm text-secondary font-normal">
                  Verified
                </span>
              </label>
              <label class="py-2 px-1 flex items-center gap-2" for="checkbox">
                <input type="checkbox" />
                <span class="text-sm text-secondary font-normal">
                  Not Verified
                </span>
              </label>
            </div>

            <div class="p-2 flex flex-col gap-1">
              <span class="text-sm font-semibold text-secondary">Date</span>
              <div class="bg-white">
                <div class="flex gap-2 relative">
                  <label for="input" class="flex gap-2 items-center">
                    <span class="text-xs font-normal leading-[30px]"
                      >From:</span
                    >
                    <input
                      type="text"
                      :value="dateValue.startDate"
                      @click="handleShowCalander"
                      placeholder="dd/mm/yyyy"
                      class="outline-none border border-secondary-light rounded px-[10px] py-1 placeholder:text-[10px] placeholder:font-normal text-[10px] font-normal max-w-[90px]"
                    />
                  </label>
                  <label for="input" class="flex gap-2 items-center">
                    <span class="text-xs font-normal leading-[30px]">To:</span>
                    <input
                      type="text"
                      @click="handleShowCalander"
                      :value="dateValue.endDate"
                      placeholder="dd/mm/yyyy"
                      class="outline-none border border-secondary-light rounded px-[10px] py-1 placeholder:text-[10px] placeholder:font-normal text-[10px] font-normal max-w-[90px]"
                    />
                  </label>
                </div>
                <div v-if="showCalander" class="z-10 absolute">
                  <vue-tailwind-datepicker
                    v-model="dateValue"
                    as-single
                    use-range
                    no-input=""
                    separator=" to "
                    :auto-apply="false"
                    :options="options"
                    :formatter="formatter"
                    :shortcuts="false"
                  />
                </div>
              </div>
              <div class="py-2 px-1 flex gap-[4px] max-w-[320px] flex-wrap">
                <span
                  class="px-3 py-2 border border-secondary-light rounded-3xl cursor-pointer text-xs font-semibold tracking-[0.17px]"
                >
                  Last 7 Days
                </span>
                <span
                  class="px-3 py-2 border border-secondary-light rounded-3xl cursor-pointer text-xs font-semibold tracking-[0.17px]"
                >
                  Last 15 Days
                </span>
                <span
                  class="px-3 py-2 border border-secondary-light rounded-3xl cursor-pointer text-xs font-semibold tracking-[0.17px]"
                >
                  Last 30 Days </span
                ><span
                  class="px-3 py-2 border border-secondary-light rounded-3xl cursor-pointer text-xs font-semibold tracking-[0.17px]"
                >
                  Last 90 Days
                </span>
                <span
                  class="px-3 py-2 border border-secondary-light rounded-3xl cursor-pointer text-xs font-semibold tracking-[0.17px]"
                >
                  Last 6 Months
                </span>
                <span
                  class="px-3 py-2 border border-secondary-light rounded-3xl cursor-pointer text-xs font-semibold tracking-[0.17px]"
                >
                  Last Year
                </span>
              </div>
            </div>

            <div class="p-2 flex flex-col gap-1">
              <span class="text-sm font-semibold text-secondary">
                Risk Score
              </span>
              <div class="flex gap-2">
                <label for="input" class="flex gap-2 items-center">
                  <span class="text-xs font-normal leading-[30px]">From:</span>
                  <input
                    type="text"
                    placeholder="Starting Value"
                    class="outline-none border border-secondary-light rounded px-[10px] py-1 placeholder:text-[10px] placeholder:font-normal text-[10px] font-normal max-w-[90px]"
                  />
                </label>
                <label for="input" class="flex gap-2 items-center">
                  <span class="text-xs font-normal leading-[30px]">To:</span>
                  <input
                    type="text"
                    placeholder="Starting Value"
                    class="outline-none border border-secondary-light rounded px-[10px] py-1 placeholder:text-[10px] placeholder:font-normal text-[10px] font-normal max-w-[90px]"
                  />
                </label>
              </div>
              <div class="py-2 px-1 flex gap-[4px] max-w-[320px] flex-wrap">
                <span
                  class="px-3 py-2 border border-secondary-light rounded-3xl cursor-pointer text-xs font-semibold tracking-[0.17px]"
                >
                  Low(0 to 1000)
                </span>
                <span
                  class="px-3 py-2 border border-secondary-light rounded-3xl cursor-pointer text-xs font-semibold tracking-[0.17px]"
                >
                  Med (1001 to 3000)
                </span>
                <span
                  class="px-3 py-2 border border-secondary-light rounded-3xl cursor-pointer text-xs font-semibold tracking-[0.17px]"
                >
                  High (3001 to 5000)
                </span>
              </div>
            </div>

            <div class="p-2 flex flex-col gap-1 mr-6">
              <span class="text-sm font-semibold text-secondary">Status</span>
              <label class="py-2 px-1 flex items-center gap-2" for="checkbox">
                <input type="checkbox" />
                <span class="text-sm text-secondary font-normal">
                  Pending
                </span>
              </label>
              <label class="py-2 px-1 flex items-center gap-2" for="checkbox">
                <input type="checkbox" />
                <span class="text-sm text-secondary font-normal">
                  Awaiting
                </span>
              </label>
              <label class="py-2 px-1 flex items-center gap-2" for="checkbox">
                <input type="checkbox" />
                <span class="text-sm text-secondary font-normal">
                  Accepted
                </span>
              </label>
              <label class="py-2 px-1 flex items-center gap-2" for="checkbox">
                <input type="checkbox" />
                <span class="text-sm text-secondary font-normal">
                  Rejected
                </span>
              </label>
            </div>
          </div>
        </div>
        <div class="flex flex-col border-b gap-2 px-4 py-3 tracking-[0.15px]">
          <span class="font-medium text-black text-lg">Saved Filters </span>
          <div class="py-2 px-1 flex gap-[4px] flex-wrap">
            <div
              class="flex items-center gap-1 px-3 py-2 border-y border-secondary-light rounded-3xl cursor-pointer text-xs font-normal tracking-[0.17px]"
            >
              <span> Verified Requests </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z"
                  fill="#333333"
                />
              </svg>
            </div>
            <div
              class="flex items-center gap-1 px-3 py-2 border border-secondary-light rounded-3xl cursor-pointer text-xs font-normal tracking-[0.17px]"
            >
              <span> Not Verified Requests </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z"
                  fill="#333333"
                />
              </svg>
            </div>
            <div
              class="flex items-center gap-1 px-3 py-2 border border-secondary-light rounded-3xl cursor-pointer text-xs font-normal tracking-[0.17px]"
            >
              <span> Risk: 0-4000 </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z"
                  fill="#333333"
                />
              </svg>
            </div>
            <div
              class="flex items-center gap-1 px-3 py-2 border border-secondary-light rounded-3xl cursor-pointer text-xs font-normal tracking-[0.17px]"
            >
              <span> IND </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z"
                  fill="#333333"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="p-4 flex justify-between">
          <label class="py-2 px-1 flex items-center gap-2" for="checkbox">
            <input type="checkbox" />
            <span class="text-sm text-secondary font-normal">
              Save search with filter
            </span>
          </label>
          <div
            class="flex gap-6 text-sm font-medium capitalize tracking-[0.4px]"
          >
            <span
              @click="() => console.log('Clear Filter')"
              class="px-4 py-2 cursor-pointer"
            >
              Clear Filter
            </span>
            <button class="px-4 py-2 bg-[#FFCF25] rounded-md">
              Save Filters
            </button>
          </div>
        </div>
      </div>

      <!-- Table -->
      <table class="w-full">
        <thead>
          <tr>
            <th
              v-for="(headerItem, index) in tableHeader"
              :key="headerItem + index"
              className="px-3 py-4 text-base text-start text-[#606060] border-y"
            >
              <div class="flex gap-2 items-center">
                <span>
                  {{ headerItem }}
                </span>
                <div class="cursor-pointer">
                  <svg
                    width="10px"
                    height="10px"
                    viewBox="0 0 24 24"
                    fill="none"
                    @click="() => console.log('up')"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.1018 16.9814C5.02785 16.9814 4.45387 15.7165 5.16108 14.9083L10.6829 8.59762C11.3801 7.80079 12.6197 7.80079 13.3169 8.59762L18.8388 14.9083C19.5459 15.7165 18.972 16.9814 17.898 16.9814H6.1018Z"
                      fill="#606060"
                    />
                  </svg>
                  <svg
                    @click="() => console.log('down')"
                    width="10px"
                    class="-mt-[3px]"
                    height="10px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.1018 8C5.02785 8 4.45387 9.2649 5.16108 10.0731L10.6829 16.3838C11.3801 17.1806 12.6197 17.1806 13.3169 16.3838L18.8388 10.0731C19.5459 9.2649 18.972 8 17.898 8H6.1018Z"
                      fill="#606060"
                    />
                  </svg>
                </div>
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            class="w-full border-y text-secondary text-bas"
            v-for="(document, index) in reviewRequest"
            :key="document + index"
          >
            <td
              v-for="(value, index) in Object.values(document)"
              :key="value + index"
              class="px-3 py-4 text-start tracking-[0.17px]"
            >
              <div v-if="Array.isArray(value)" class="flex flex-col gap-1">
                <span class="font-semibold">{{ value[0] }}</span>
                <span class="font-normal">{{ value[1] }}</span>
              </div>
              <span v-else-if="value === true">
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.66667 4.5H25.3333C26.8 4.5 28 5.7 28 7.16667V25.8333C28 27.3 26.8 28.5 25.3333 28.5H6.66667C5.2 28.5 4 27.3 4 25.8333V7.16667C4 5.7 5.2 4.5 6.66667 4.5ZM22.1333 10.6333L24 12.5L13.3333 23.1667L8 17.8333L9.86667 15.9667L13.3333 19.4333L22.1333 10.6333Z"
                    fill="#38A457"
                  />
                </svg>
              </span>
              <span v-else-if="value === false">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                >
                  <path
                    d="M25.3333 4.5H6.66667C5.2 4.5 4 5.7 4 7.16667V25.8333C4 27.3 5.2 28.5 6.66667 28.5H25.3333C26.8 28.5 28 27.3 28 25.8333V7.16667C28 5.7 26.8 4.5 25.3333 4.5Z"
                    fill="#C92B2B"
                  />
                  <path
                    d="M10 22.5L22 10.5M10 10.5L22 22.5"
                    stroke="white"
                    stroke-width="2.5"
                  />
                </svg>
              </span>
              <span class="text-white" v-else-if="typeof value === 'number'">
                <span
                  :class="{
                    'bg-[#C92B2B]': value >= 4000,
                    'bg-[#DC9617]': value >= 2000 && value < 4000,
                    'bg-success': value > 0 && value < 2000,
                  }"
                  class="px-3 py-1 text-base font-medium rounded"
                  >{{ value }}
                </span>
              </span>
              <span v-else-if="value === 'Pending'">
                <div class="flex gap-[10px] items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                  >
                    <circle cx="6" cy="6.5" r="6" fill="#FB9F34" />
                  </svg>
                  <span>{{ value }}</span>
                </div></span
              >
              <span v-else>{{ value }}</span>
            </td>
            <td class="px-3 py-4 text-start">
              <div class="flex gap-[10px] items-center">
                <span
                  class="p-2 border border-secondary-light rounded cursor-pointer"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M16.668 3.83594H3.33464C2.41797 3.83594 1.6763 4.58594 1.6763 5.5026L1.66797 15.5026C1.66797 16.4193 2.41797 17.1693 3.33464 17.1693H16.668C17.5846 17.1693 18.3346 16.4193 18.3346 15.5026V5.5026C18.3346 4.58594 17.5846 3.83594 16.668 3.83594ZM16.668 15.5026H3.33464V7.16927L10.0013 11.3359L16.668 7.16927V15.5026ZM10.0013 9.66927L3.33464 5.5026H16.668L10.0013 9.66927Z"
                      fill="#333333"
                    />
                  </svg>
                </span>
                <span
                  class="p-2 border border-secondary-light rounded cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M10.0013 15.5C14.6038 15.5 18.3346 10.5 18.3346 10.5C18.3346 10.5 14.6038 5.5 10.0013 5.5C5.3988 5.5 1.66797 10.5 1.66797 10.5C1.66797 10.5 5.3988 15.5 10.0013 15.5Z"
                      stroke="#333333"
                      stroke-width="1.75"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.0013 12.5807C10.5538 12.5807 11.0837 12.3612 11.4744 11.9705C11.8651 11.5798 12.0846 11.0499 12.0846 10.4974C12.0846 9.94486 11.8651 9.41496 11.4744 9.02426C11.0837 8.63356 10.5538 8.41406 10.0013 8.41406C9.44877 8.41406 8.91886 8.63356 8.52816 9.02426C8.13746 9.41496 7.91797 9.94486 7.91797 10.4974C7.91797 11.0499 8.13746 11.5798 8.52816 11.9705C8.91886 12.3612 9.44877 12.5807 10.0013 12.5807Z"
                      stroke="#333333"
                      stroke-width="1.75"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span
                  class="p-2 border border-secondary-light rounded cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M14.9987 13.0026V15.5026H4.9987V13.0026H3.33203V15.5026C3.33203 16.4193 4.08203 17.1693 4.9987 17.1693H14.9987C15.9154 17.1693 16.6654 16.4193 16.6654 15.5026V13.0026H14.9987ZM14.1654 9.66927L12.9904 8.49427L10.832 10.6443V3.83594H9.16536V10.6443L7.00703 8.49427L5.83203 9.66927L9.9987 13.8359L14.1654 9.66927Z"
                      fill="#333333"
                    />
                  </svg>
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import reviewRequest from "../../data/reviewRequestData";
import VueTailwindDatepicker from "vue-tailwind-datepicker";
import SearchInput from "./SearchInput.vue";
const showSearchDropdown = ref(false);
const showFilterDropdown = ref(false);
const showCalander = ref(false);
const dropdown = ref(null);

//
const dateValue = ref({
  startDate: "",
  endDate: "",
});
const formatter = ref({
  date: "DD MMM YYYY",
  month: "MMM",
});
const handleShowCalander = () => {
  showCalander.value = !showCalander.value;
};

const tableHeader = [
  "Last Updated",
  "Ticket ID",
  "Name",
  "Citizenship / Residency",
  "Liveness Check",
  "Risk Score",
  "Status",
  "Actions",
];

const closeDropdownOnOutsideClick = (event) => {
  showSearchDropdown.value = false;
  showFilterDropdown.value = false;
};

const preventClose = (event) => {
  event.stopPropagation();
};
onMounted(() => {
  document.addEventListener("click", closeDropdownOnOutsideClick);
});
onUnmounted(() => {
  document.removeEventListener("click", closeDropdownOnOutsideClick);
});

const showFilterDropdownSetter = () => {
  showSearchDropdown.value = false;
  showFilterDropdown.value = !showFilterDropdown.value;
};
const showSearchDropdownSetter = (value) => {
  showFilterDropdown.value = false;
  showSearchDropdown.value = !value;
};

const options = ref({
  footer: {
    apply: "Save",
    cancel: "Cancel",
  },
});

watch(dateValue, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    handleShowCalander();
  }
});
</script>

<style scoped>
input[type="text"]:focus {
  outline: none;
  box-shadow: none;
  border-color: #b6b6b6;
  border: 1;
}
input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  appearance: none;
  margin: 0;
  font: inherit;
  color: currentColor;
  border: 1px solid currentColor;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
}
input[type="checkbox"]:focus {
  border: 1;
  outline: none;
  box-shadow: none;
}
input[type="checkbox"]:checked {
  background-color: #f0c10e;
  border: 1px solid #f0c10e;
  background-image: url("./icons/check_small.png");
  background-size: 153% 153%;
  background-position: center center;
  color: white;
}

input[type="checkbox"]::before {
  content: "";
  width: 0.85em;
  height: 0.85em;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em white;
}
</style>
