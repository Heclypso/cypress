/// <reference types="cypress" />

describe('Testes para a página de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e-bay.vercel.app/')
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
    })

    it('Deve levar o usuário até o formulário de inscrição', () => {
        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscricao')
    })

    it('Deve preencher o formulário de inscrição', () => {
        cy.get('input[name="nome-completo"]').type("Gabriel Henrique")
        cy.get('input[name="email"]').type("gabrielhenriqueteste@teste.com")
        cy.get('input[name="telefone"]').type("11 12345678")
        cy.get('input[name="endereco"]').type("Rua Jest, bairro Cypress, são paulo-sp")
        cy.get('select[name="escolaridade"]').select('outros')
        cy.get('#linux').check()
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })

        cy.screenshot('tela-inscricao-preenchido')
    })
})