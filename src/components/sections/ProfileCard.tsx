export default function ProfileCard() {
  return (
    <div className="profile-card reveal">
      <div className="photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/profile-cutout.webp" alt="JNX03" />
        <div className="frame-corners" />
        <div className="id-strip">
          <span>ID ／ JNX-03</span>
          <span className="red">● REC</span>
          <span>2026.05</span>
        </div>
      </div>
      <div className="name-block">
        <div>
          <div className="name">JEAN ／ JNX03</div>
          <div className="role">CHAWABHON NETISINGHA ／ ชวภณ เนติสิงหะ</div>
        </div>
        <div className="kana">ジーン</div>
      </div>
      <div className="stats">
        <div>
          <div className="k">GRADE</div>
          <div className="v">M.6 / Final yr</div>
        </div>
        <div>
          <div className="k">GRADE</div>
          <div className="v">M.6</div>
        </div>
        <div>
          <div className="k">BASE</div>
          <div className="v">THAILAND</div>
        </div>
        <div>
          <div className="k">SCHOOL</div>
          <div className="v">PRC</div>
        </div>
        <div>
          <div className="k">FOCUS</div>
          <div className="v">AI / SEC</div>
        </div>
        <div>
          <div className="k">STATUS</div>
          <div className="v" style={{ color: "var(--accent)" }}>
            ACTIVE
          </div>
        </div>
      </div>
    </div>
  );
}
