class CreditController < ApplicationController
  def add_credit
    Credit.create(member_id: params["memberId"], receiving_member_id: params["receivingMemberId"])
    render json: { count: Credit.where(member_id: params["memberId"], receiving_member_id: params["receivingMemberId"]).length }
  end
  def remove_credit
    credits = Credit.where(member_id: params["memberId"], receiving_member_id: params["receivingMemberId"])
    if credits.length > 0 
      credits.last.delete
    end
    render json: { count: Credit.where(member_id: params["memberId"], receiving_member_id: params["receivingMemberId"]).length }
  end
end
