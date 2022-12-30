import React from 'react';

function Pay({ pay, onRemove }) {
  return (
    <div>
      <div>
        <button>전체선택/해제</button>
        {pay.users.map((user) => (
          <button key={`${pay.id}+${user.id}`} type="button">
            {user.name}
          </button>
        ))}
        <button onClick={() => onRemove(pay.id)}>삭제</button>
      </div>
    </div>
  );
}

export default function PaymentList({ pays, onRemove, onChange }) {
  return (
    <div>
      {pays.map((pay) => (
        <Pay key={pay.id} pay={pay} onRemove={onRemove} />
      ))}
    </div>
  );
}
