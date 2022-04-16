import React from 'react';
import styles from './_timetable.module.scss';

function Timetable() {
    return (
        <>
            <div className={styles.title}>Thời gian biểu</div>
            <div className={styles.container}>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Thứ hai</th>
                            <th>Thứ ba</th>
                            <th>Thứ tư</th>
                            <th>Thứ năm</th>
                            <th>Thứ sáu</th>
                            <th>Thứ bảy</th>
                            <th>Chủ nhật</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className={styles.darkColor}
                        >
                            <td >
                                Tiết 1
                                <br />
                                <span>(7:00 - 7:50)</span>
                            </td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td>
                                <div>
                                    Tiếng Anh chuyên ngành
                                    <p>232-A4</p>
                                </div>
                            </td>
                            <td><div></div></td>
                            <td><div></div></td>

                        </tr>

                        <tr>
                            <td>
                                Tiết 2
                                <br />
                                <span>(7:55 - 8:45)</span>
                            </td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td>
                                <div>
                                    Tiếng Anh chuyên ngành
                                    <p>232-A4</p>
                                </div>
                            </td>
                            <td><div></div></td>
                            <td><div></div></td>

                        </tr>

                        <tr className={styles.darkColor}>
                            <td>
                                Tiết 3
                                <br />
                                <span>(8:50 - 9:40)</span>
                            </td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td>
                                <div>
                                    Tiếng Anh chuyên ngành
                                    <p>232-A4</p>
                                </div>
                            </td>
                            <td><div></div></td>
                            <td><div></div></td>

                        </tr>

                        <tr>
                            <td>
                                Tiết 4
                                <br />
                                <span>(9:45 - 10:35)</span>
                            </td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td><div></div></td>

                        </tr>

                        <tr className={styles.darkColor}>
                            <td>
                                Tiết 5
                                <br />
                                <span>(10:40 - 11:30)</span>
                            </td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td><div></div></td>

                        </tr>

                        <tr>
                            <td>
                                Tiết 6
                                <br />
                                <span>(11:35 - 12:25)</span>
                            </td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td><div></div></td>

                        </tr>

                        <tr className={styles.darkColor}>
                            <td>
                                Tiết 7
                                <br />
                                <span>(12:55 - 13:45)</span>
                            </td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td>
                                <div>
                                    Mạng máy tính
                                    <p>243-A3</p>
                                </div>
                            </td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td>
                                <div>
                                    Lập trình Windows
                                    <p>301-C5</p>
                                </div>
                            </td>
                            <td><div></div></td>

                        </tr>

                        <tr>
                            <td>
                                Tiết 8
                                <br />
                                <span>(13:50 - 14:40)</span>
                            </td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td>
                                <div>
                                    Mạng máy tính
                                    <p>243-A3</p>
                                </div>
                            </td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td>
                                <div>
                                    Lập trình Windows
                                    <p>301-C5</p>
                                </div>
                            </td>
                            <td><div></div></td>

                        </tr>

                        <tr className={styles.darkColor}>
                            <td>
                                Tiết 9
                                <br />
                                <span>(14:45 - 15:35)</span>
                            </td>
                            <td>
                                <div>
                                    Lập trình Windows
                                    <p>245-A3</p>
                                </div>
                            </td>
                            <td><div></div></td>
                            <td>
                                <div>
                                    Mạng máy tính
                                    <p>243-A3</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    Lập trình Windows
                                    <p>243-A3</p>
                                </div>
                            </td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td><div></div></td>

                        </tr>

                        <tr>
                            <td>
                                Tiết 10
                                <br />
                                <span>(15:40 - 16:30)</span>
                            </td>
                            <td>
                                <div>
                                    Lập trình Windows
                                    <p>245-A3</p>
                                </div>
                            </td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td>
                                <div>
                                    Lập trình Windows
                                    <p>243-A3</p>
                                </div>
                            </td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td><div></div></td>

                        </tr>

                        <tr className={styles.darkColor}>
                            <td>
                                Tiết 11
                                <br />
                                <span>(16:35 - 17:25)</span>
                            </td>
                            <td>
                                <div>
                                    Kinh tế chính trị Mác - Lênin
                                    <p>245-A3</p>
                                </div>
                            </td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td>
                                <div>
                                    Kinh tế chính trị Mác - Lênin
                                    <p>243-A3</p>
                                </div>
                            </td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td><div></div></td>

                        </tr>

                        <tr>
                            <td>
                                Tiết 12
                                <br />
                                <span>(17:30 - 18:20)</span>
                            </td>
                            <td>
                                <div>
                                    Kinh tế chính trị Mác - Lênin
                                    <p>245-A3</p>
                                </div>
                            </td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td>
                                <div>
                                    Kinh tế chính trị Mác - Lênin
                                    <p>243-A3</p>
                                </div>
                            </td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td><div></div></td>

                        </tr>

                        <tr className={styles.darkColor}>
                            <td>
                                Tiết 13
                                <br />
                                <span>(18:50 - 19:40)</span>
                            </td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td>
                                <div>
                                    Lập trình Java
                                    <p>Hội thảo 10</p>
                                </div>
                            </td>
                            <td><div></div></td>
                            <td>
                                <div>
                                    Lập trình Java
                                    <p>Hội thảo 10</p>
                                </div>
                            </td>
                            <td><div></div></td>
                            <td><div></div></td>

                        </tr>

                        <tr>
                            <td>
                                Tiết 14
                                <br />
                                <span>(19:45 - 20:35)</span>
                            </td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td>
                                <div>
                                    Lập trình Java
                                    <p>Hội thảo 10</p>
                                </div>
                            </td>
                            <td><div></div></td>
                            <td>
                                <div>
                                    Lập trình Java
                                    <p>Hội thảo 10</p>
                                </div>
                            </td>
                            <td><div></div></td>
                            <td><div></div></td>

                        </tr>

                        <tr className={styles.darkColor}>
                            <td>
                                Tiết 15
                                <br />
                                <span>(20:40 - 21:30)</span>
                            </td>
                            <td><div></div></td>
                            <td><div></div></td>
                            <td>
                                <div>
                                    Lập trình Java
                                    <p>Hội thảo 10</p>
                                </div>
                            </td>
                            <td><div></div></td>
                            <td>
                                <div>
                                    Lập trình Java
                                    <p>Hội thảo 10</p>
                                </div>
                            </td>
                            <td><div></div></td>
                            <td><div></div></td>

                        </tr>
                    </tbody>
                </table >
            </div>
        </>
    )
}

export default Timetable;