document.querySelector('#product-form').addEventListener('submit', async e => {
  e.preventDefault(); const form=e.currentTarget; const values=Object.fromEntries(new FormData(form)); const file=values.image;
  const product={ id:'P'+Date.now(), supplierCode:values.supplierCode, productNumber:values.productNumber, name:values.name, category:values.category, color:values.color, supplier:values.supplier, image:'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85' };
  if(file && file.size){ product.image=await new Promise(resolve=>{ const reader=new FileReader(); reader.onload=()=>resolve(reader.result); reader.readAsDataURL(file); }); }
  const current=JSON.parse(localStorage.getItem('productGuideProducts')||'[]'); current.push(product); localStorage.setItem('productGuideProducts',JSON.stringify(current)); form.reset(); document.querySelector('#form-message').textContent=`تم حفظ ${product.name}. افتح دليل المنتجات لرؤيته.`;
});
