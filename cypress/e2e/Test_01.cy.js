describe('Buying products through the Mobile platform and paying with Promptpay will be able to use free delivery coupons.', () => {
  it('able to use coupon', () => {
    cy.viewport('iphone-x')
    cy.visit('https://shopee.co.th/')
    cy.get('.cart_drawer_target_id').click()
    cy.get('.stardust-checkbox__input').click()
    cy.get('.shopee-button-solid--primary').contains('ชำระเงิน').click()

    cy.get('.product-variation').contains('QR พร้อมเพย์').click()

    cy.contains('กดใช้โค้ด').click()
    cy.contains('เลือกโค้ดส่วนลด Shopee').should('be.visible')
    cy.get('#voucher-card').contains('ส่งฟรี').should('be.enabled')
  })

  it('unable to use coupon', () => {
    cy.visit('https://shopee.co.th/')
    cy.get('.cart_drawer_target_id').click()
    cy.get('.stardust-checkbox__input').click()
    cy.get('.shopee-button-solid--primary').contains('ชำระเงิน').click()

    cy.get('.product-variation').contains('QR พร้อมเพย์').click()

    cy.contains('กดใช้โค้ด').click()
    cy.contains('เลือกโค้ดส่วนลด Shopee').should('be.visible')
    cy.get('#voucher-card').contains('ส่งฟรี').should('be.disabled')
    cy.get('.vc_WarningBanner').should('contain.text','กรุณาใช้โค้ดผ่านแอปพลิเคชันเท่านั้น')
  })
})
