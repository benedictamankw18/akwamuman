function moblieClubdrop() {
    if (closedrop) {
        document.getElementById("moblieActivies").classList.remove('show');
        document.getElementById("moblieHouses").classList.remove('show');
        document.getElementById("moblieDepartment").classList.remove('show');
    }
    document.getElementById("moblieClubs").classList.toggle('show');

    closedrop = true;
}