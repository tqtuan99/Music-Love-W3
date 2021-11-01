// *Tạo một biến buyBtns bằng hằng const
// !document: đại diện cho trang web của mình, muốn lấy gì của trang web phải đi qua document.
// ?querySelectorAll: lấy ra tất các đối tượng có class js-buy-tickets (. dành cho class, # dùng cho ID)

const buyBtns = document.querySelectorAll('.js-buy-tickets')
const modal = document.querySelector('.js-modal')
const modalContainer=document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')
// *querySelector: bản thân khái niệm nó chỉ là 1 cái nên không dùng vòng lặp

function showBuyTickets() {
   // alert: show hộp thoại trên trình duyệt
   modal.classList.add('open')
   //gọi biến modal và add thêm class open và modal
}

function hideBuyTickets() {
   modal.classList.remove('open')
   // gọi biến modalClose và hide(ẩn) class open của modal đi hay còn gọi là ẩn MODAL
}

for (const buyBtn of buyBtns) {
   buyBtn.addEventListener('click', showBuyTickets)
   // Khi click vào buyBtn(button buy tickets) thì sẽ họi hàm showBuyTickets
}

modalClose.addEventListener('click', hideBuyTickets)
   // Khi click vào modalClose(button close) thì sẽ họi hàm showBuyTickets

modal.addEventListener('click', hideBuyTickets)
   // Khi click vào khoảng không Modal thì sẽ tắt modal-container 
   // (nhưng do modal-container(class con) nó nằm trong modal nên khi nhấn vào bất kỳ thứ gì trong modal(class cha) thì class cha sẽ nghe --> cũng sẽ ẩn modal-container )
   // *--> Hiện tương nổi bột trong web (Khi tác động 1 hành vi vào 1 thẻ nào đó thì hành vi đó ví như bong bóng dưới đáy hồ, nó sẽ nổi dần lên qua các thẻ cha cho đến khi hết thì thôi )

   // --> Giải pháp: ràn buộc cho nổi bột tới đâu (cụ thể trong này mình sẽ cho nổi bột tới modal-container là hiện tượng này sẽ mất)
modalContainer.addEventListener('click', function (even) {
   // viết thằng hàm vào sự kiện thì không cần đặt tên
   // Biến even: sự click vào 1 hành vi diễn ra luôn trả về 1 even, ngăn chặn hành vi mặc định(ngừng nổi bột từ modal-container)
   
   even.stopPropagation()
   // *thực chất hành vi nổi bật vẫn xảy ra, nhưng nó nổi qua tất cả các thẻ cha đến khi tới class modal-container thì sẽ stop hành vi nổi bột
})